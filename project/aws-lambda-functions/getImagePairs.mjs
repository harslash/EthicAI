import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const BUCKET_NAME = process.env.BUCKET_NAME;
const NUM_FILES = parseInt(process.env.NUM_FILES);
const PRESIGNED_URL_EXPIRATION = 1800;
const JSON_FILE_KEY = "ai-painting-demo/image_pair_txt.json";

const client = new S3Client();

async function generatePresignedUrl(key) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  const presignedUrl = await getSignedUrl(client, command, {
    expiresIn: PRESIGNED_URL_EXPIRATION,
  });

  return presignedUrl;
}

async function getImagePair(id) {
  const realImagePath = `ai-painting-demo/real/${id}.jpg`;
  const fakeImagePath = `ai-painting-demo/fake/${id}.jpg`;

  const realImageURL = await generatePresignedUrl(realImagePath);
  const fakeImageURL = await generatePresignedUrl(fakeImagePath);

  return { realImageURL, fakeImageURL };
}

function getRandomInts(quantity, max) {
  const set = new Set()
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
  }
  return set
}

async function getStringArrayFromJSON() {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: JSON_FILE_KEY,
  });

  const response = await client.send(command);
  const jsonData = await response.Body.transformToString('utf-8');
  return JSON.parse(jsonData);
}

export const handler = async (event, context) => {
  const { numImages } = JSON.parse(event.body);

  const imageIDs = Array.from(getRandomInts(numImages, NUM_FILES));
  const imagePairs = await Promise.all(imageIDs.map(id => getImagePair(id)));
  const stringArray = await getStringArrayFromJSON();

  const realImageURLs = imagePairs.map(pair => pair.realImageURL);
  const fakeImageURLs = imagePairs.map(pair => pair.fakeImageURL);
  const imageStrings = imageIDs.map(id => stringArray[id - 1]);

  return ({
    statusCode: 200,
    body: JSON.stringify({ realImageURLs, fakeImageURLs, imageStrings })
  });
};
