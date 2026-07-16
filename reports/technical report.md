# Technical Report

## Project

AI Chatbot Development

## Project Objective

The objective of this project is to develop an AI chatbot application using a client-server architecture. The system allows users to enter prompts through a frontend interface, sends the prompts to a backend server, processes them through an AI model layer, and displays the generated response to the user.

## System Architecture

The AI chatbot system follows a client-server architecture consisting of the following layers:

- Client Layer: Provides the user interface and accepts user input.
- Server Layer: Receives client requests and processes API requests.
- AI Model Layer: Processes the user prompt and generates a response.
- Database Layer: Designed as an optional future component for storing chat history, user information, and feedback.

The current implementation focuses on frontend-backend communication and the AI model layer.

## Task 1: Implement Client-Server Communication

The frontend was connected to the backend using the JavaScript Fetch API.

The frontend sends the user prompt to the backend using the `POST /api/chat` endpoint.

The request contains a JSON body:

```json
{
  "prompt": "Hello"
}
