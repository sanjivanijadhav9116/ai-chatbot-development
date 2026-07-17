# API Specification Document

## Objective

To design and document API endpoints that enable communication between the frontend client, backend server, and Google Gemini AI model in the AI chatbot application.

The APIs provide structured communication between different components of the application and support chatbot functionality, server health monitoring, and future application features.

---

## API Endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/chat` | POST | Send prompts to the AI chatbot and receive AI-generated responses. |
| `/api/history` | GET | Provide an endpoint for future conversation history functionality. |
| `/api/users` | GET | Provide an endpoint for future user-related functionality. |
| `/api/feedback` | POST | Provide an endpoint for future user feedback functionality. |
| `/api/health` | GET | Check whether the API server is running properly. |

---

# Endpoint Details

## 1. POST /api/chat

### Purpose

Receives a user prompt from the frontend, sends it to the Google Gemini AI model, and returns the generated AI response.

### Request Body

```json
{
  "prompt": "Hello"
}
Processing Flow
The frontend sends the user's prompt to the /api/chat endpoint.
The backend receives and validates the prompt.
The backend sends the prompt to the Google Gemini AI model.
The Google Gemini AI model processes the prompt and generates a response.
The generated response is returned to the backend.
The backend sends the AI-generated response back to the frontend.
The frontend displays the response to the user.
Successful Response
{
  "response": "Artificial intelligence is..."
}
Error Response

If no prompt is provided:

{
  "error": "Prompt is required"
}

If the AI model fails to generate a response:

{
  "error": "AI model failed to generate a response"
}
2. GET /api/history
Purpose

Provides an endpoint for future conversation history functionality.

The current implementation returns an empty history array because persistent conversation storage has not been implemented.

Response
{
  "history": []
}
3. GET /api/users
Purpose

Provides an endpoint for future user-related functionality.

The current implementation returns an empty users array because user management and authentication have not been implemented.

Response
{
  "users": []
}
4. POST /api/feedback
Purpose

Provides an endpoint for future user feedback functionality.

The current implementation returns a confirmation message. Persistent feedback storage has not been implemented.

Response
{
  "message": "Feedback stored successfully"
}
5. GET /api/health
Purpose

Checks whether the API service is active and functioning correctly.

Response
{
  "status": "Server is running"
}
Client-Server Communication

The frontend communicates with the backend using the JavaScript Fetch API.

The user's prompt is sent to the /api/chat endpoint using a POST request.

The request contains the prompt in JSON format:

{
  "prompt": "User input"
}

The backend processes the request and sends the prompt to the Google Gemini AI model. The generated response is then returned to the frontend and displayed to the user.

End-to-End AI Workflow
User
  ↓
Frontend Client
  ↓
POST /api/chat
  ↓
Backend Server
  ↓
Google Gemini AI Model
  ↓
Generated AI Response
  ↓
Backend Server
  ↓
Frontend Client
  ↓
User
## Conclusion

The API endpoints provide a structured communication interface between the frontend client, backend server, and Google Gemini AI model.

The /api/chat endpoint enables the complete end-to-end AI workflow by receiving a prompt from the client, processing it through the Google Gemini AI model, and returning the generated response to the user.

The additional API endpoints provide a foundation for future features such as conversation history, user management, and feedback storage.
