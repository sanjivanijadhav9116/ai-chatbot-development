# Conversation History Feature

## Objective

The objective of this module is to store and retrieve previous interactions between the user and the AI chatbot.

## Features

- Stores user prompts and AI responses.
- Saves conversation data in a JSON file.
- Retrieves previous conversation history.
- Displays previous questions and answers.
- Maintains multiple conversation records.

## Data Storage

Conversation data is stored in a JSON file named `conversation_history.json`.

Each conversation contains:

- A user question
- The corresponding AI response

## File Structure

conversation_history/

- README.md
- conversation_history.json
- history_module.md

## Example

Question: How are you?

Answer: I'm doing great! How can I help you today?

## Module Purpose

The Conversation History Module helps the chatbot maintain a record of previous interactions. This allows the system to store and retrieve conversations between the user and the AI chatbot.
