import json
import random
import boto3
import os

from collections import defaultdict

# Cached Markov chains
markov_chains = {}


def create_markov_chain(words, context_size=2):
    markov_chain = defaultdict(list)
    context_so_far = []

    for word in words:
        if len(context_so_far) == context_size:
            markov_chain[tuple(context_so_far)].append(word)
            context_so_far.pop(0)
        # the "#" symbols aren't included in the dict key
        context_so_far.append(word.strip("#").strip())

    return markov_chain


def tokenise(string):
    # add 'ꙮ' after every space
    string = string.replace(" ", " ꙮ")
    # add 'ꙮ' after every newline
    string = string.replace("\n", "\nꙮ")
    # split on 'ꙮ'
    split = string.split("ꙮ")
    return [token for token in split if token != ""]


def generate(corpus, user_input, context_size, words_to_generate):
    words = tokenise(corpus)
    markov_chain = markov_chains.get((context_size, corpus))

    if markov_chain is None:
        markov_chain = create_markov_chain(words, context_size)
        markov_chains[(context_size, corpus)] = markov_chain

    generated_words = []
    tagged_indices = []

    start = tokenise(user_input)[-context_size:]

    # if user input not long enough
    if len(start) < context_size:
        # pick random key that starts with the user input
        possible_starts = [
            key
            for key in markov_chain.keys()
            if key[len(key) - len(start) :] == tuple(start)
        ]
        # and use that instead
        start = random.choice(possible_starts)

    current_key = tuple(start)

    for _ in range(words_to_generate):
        next_words = markov_chain.get(current_key, [])
        if not next_words:
            break

        next_word = random.choice(next_words)
        generated_words.append(next_word)
        current_key = tuple(list(current_key[1:]) + [next_word.strip("#").strip()])

        if next_word.startswith("#"):
            tagged_indices.append(len(generated_words) - 1)

    generated_words = [word.strip("#").replace("\n", " ") for word in generated_words]

    return "".join(generated_words), tagged_indices


def lambda_handler(event, context):
    s3 = boto3.resource("s3")
    bucket_name = os.environ["BUCKET_NAME"]
    input_body = json.loads(event["body"])
    directory = "alt-corpora/" + input_body["corpus"]
    context_size = input_body["context_size"]
    words_to_generate = input_body["words_to_generate"]
    corpus = ""

    for obj in s3.Bucket(bucket_name).objects.filter(Prefix=directory):
        body = obj.get()["Body"].read().decode("utf-8")
        corpus += body

    user_input = input_body["input"]
    generated, biased_indices = generate(
        corpus, user_input, context_size, words_to_generate
    )

    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "input": user_input,
                "generated": generated,
                "biased_indices": biased_indices,
            }
        ),
    }
