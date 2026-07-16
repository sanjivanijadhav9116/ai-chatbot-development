import json

FILE_NAME = "conversation_history.json"


def load_conversation_history():
    with open(FILE_NAME, "r") as file:
        history = json.load(file)

    return history


def save_conversation(question, answer):
    history = load_conversation_history()

    new_conversation = {
        "question": question,
        "answer": answer
    }

    history.append(new_conversation)

    with open(FILE_NAME, "w") as file:
        json.dump(history, file, indent=2)


def display_conversation_history():
    history = load_conversation_history()

    for conversation in history:
        print("Question:", conversation["question"])
        print("Answer:", conversation["answer"])
        print()


if __name__ == "__main__":
    save_conversation(
        "What is conversation history?",
        "Conversation history stores previous questions and answers."
    )

    display_conversation_history()
