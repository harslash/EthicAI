import json
import boto3
from hugchat import hugchat
from hugchat.login import Login

client = boto3.client("secretsmanager")


def init_chatbot(email, passwd):
    sign = Login(email, passwd)
    cookies = sign.login()
    chatbot = hugchat.ChatBot(cookies=cookies.get_dict())

    # Switch model (default: meta-llama/Llama-2-70b-chat-hf. )
    # chatbot.switch_llm(1)  # Switch to `meta-llama/Llama-2-70b-chat-hf`
    chatbot.switch_llm(0)  # Switch to `OpenAssistant/oasst-sft-6-llama-30b-xor`
    return chatbot


def get_secret():
    secret_name = "hugchat-credentials"
    region_name = "ap-southeast-2"

    session = boto3.session.Session()
    client = session.client(service_name="secretsmanager", region_name=region_name)

    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
    except ClientError as e:
        raise e

    secret = get_secret_value_response["SecretString"]
    return secret


def lambda_handler(event, context):
    creds = json.loads(get_secret())
    email = creds["hugchat_email"]
    passwd = creds["hugchat_passwd"]

    input_body = json.loads(event["body"])
    prompt = input_body["prompt"]
    print("User prompt: " + prompt)
    
    chatbot = init_chatbot(email, passwd)
    query_response = chatbot.query(prompt, retry_count=2)
    print("Response: " + query_response)
    return {"statusCode": 200, "body": json.dumps({'response': query_response.text})}
