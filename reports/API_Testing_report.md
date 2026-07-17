# API Testing Report
## Project
AI Chatbot Development
## Objective
The objective of API testing is to validate the functionality, reliability, response behavior, and error handling of the backend APIs.
The APIs were tested using PowerShell REST requests and cURL commands to verify successful responses, status codes, input validation, and invalid route handling.
## Testing Environment
 * Backend Technology: Node.js
 * Framework: Express.js
 * Server: Localhost
 * Port: 3000
 * Testing Tools: PowerShell Invoke-RestMethod and cURL
## API Test Results
| Test No. | Endpoint | Method | Test Description | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
| 1 | /api/health | GET | Check whether the server is running | Server should return a running status | {"status":"Server is running"} | Passed |
| 2 | /api/chat | POST | Send a prompt to the AI model | API should return an AI-generated response | AI response returned successfully for "Hello" | Passed |
| 3 | /api/history | GET | Retrieve conversation history | API should return history data | Empty history list returned | Passed |
| 4 | /api/users | GET | Retrieve user information | API should return user data | Empty users list returned | Passed |
| 5 | /api/feedback | POST | Submit user feedback | API should return a confirmation message | "Feedback stored successfully" | Passed |
| 6 | /api/chat | POST | Send an empty request {} | API should reject due to missing prompt | "Prompt is required" returned (HTTP 400) | Passed |
| 7 | /api/invalid | GET | Test a non-existent endpoint | API should return an error response | "Cannot GET /api/invalid" | Passed |
## Status Code Verification
The health check API was tested using cURL with response headers.
### Request
GET /api/health
### Response Status
HTTP/1.1 200 OK
This confirms that the server successfully processed the request and the health check endpoint is functioning correctly.
## Error Condition Testing
Two key error conditions were verified during the API testing phase:
### 1. Empty Chat Request
An empty JSON request body was sent to the chat endpoint:
{}
The API correctly rejected the request because the required prompt field was missing.
 * Response: { "error": "Prompt is required" }
 * Status Code: 400 Bad Request
This confirms that strict input validation is successfully implemented for empty or missing prompts.
### 2. Invalid Endpoint
A request was sent to a non-existent route to test wildcard routing:
GET /api/invalid
 * Response: Cannot GET /api/invalid
 * Status Code: 404 Not Found
This confirms that invalid routes are properly restricted and handled by the backend server.
## API Testing Summary
The main backend endpoints were tested successfully, verifying the following core functionalities:
 * Server health check monitoring
 * AI chatbot prompt processing and end-to-end integration
 * Google Gemini AI-generated response handling
 * Standby endpoints for conversation history, user info, and feedback
 * Edge-case input validation (empty prompt verification)
 * Invalid route restriction and standard HTTP status code mapping
## Conclusion
The API testing confirmed that the main backend endpoints of the AI Chatbot application are functioning correctly.
The health check, chat, history, users, and feedback endpoints were successfully validated. The chatbot endpoint accurately processed user prompts and returned AI-generated responses from the Google Gemini AI model.
Input validation was also verified by sending an empty request to the chat API, where the server correctly rejected the payload with a 400 Bad Request status and an appropriate error message. Overall, the backend API functionality and error handling are production-ready for this testing phase.
