API Testing Report

Project

AI Chatbot Development

Objective

The objective of API testing is to validate the functionality, reliability, and response behavior of the backend APIs. The APIs were tested using PowerShell REST requests and cURL commands.

Testing Environment

- Backend Technology: Node.js
- Framework: Express.js
- Server: Localhost
- Port: 3000
- Testing Tools: PowerShell Invoke-RestMethod and cURL

API Test Results

Test No.| Endpoint| Method| Test Description| Expected Result| Actual Result| Status
1| "/api/health"| GET| Check whether the server is running| Server should return a running status| "{"status":"Server is running"}"| Passed
2| "/api/chat"| POST| Send a prompt to the AI model layer| API should return an AI-generated response| Response returned successfully for ""Hello""| Passed
3| "/api/history"| GET| Retrieve conversation history| API should return history data| Empty history list returned| Passed
4| "/api/users"| GET| Retrieve user information| API should return user data| Empty users list returned| Passed
5| "/api/feedback"| POST| Submit user feedback| API should confirm feedback storage| "Feedback stored successfully"| Passed
6| "/api/chat"| POST| Send an empty request "{}"| API should ideally reject invalid input| Response returned with undefined prompt| Issue Found
7| "/api/invalid"| GET| Test a non-existent endpoint| API should return an error| "Cannot GET /api/invalid"| Passed

Status Code Verification

The health check API was tested using cURL with response headers.

Request

GET /api/health

Response Status

HTTP/1.1 200 OK

This confirms that the server successfully processed the request.

Error Condition Testing

Two error conditions were tested:

1. Empty Chat Request

An empty JSON request was sent to the chat endpoint:

{}

The API returned a response containing an undefined prompt. This indicates that input validation should be improved in the future.

2. Invalid Endpoint

A request was sent to:

GET /api/invalid

The server returned:

Cannot GET /api/invalid

This confirms that invalid routes are not accepted by the backend.

Conclusion

The API testing confirmed that the main backend endpoints of the AI Chatbot application are functioning correctly. The health check, chat, history, users, and feedback endpoints were successfully tested. Status code verification confirmed a successful "200 OK" response for the health check API.

An input validation issue was identified when an empty request was sent to the chat API. This can be improved in future development by validating the "prompt" field before processing the request.

Overall, the backend API functionality was successfully validated as part of Week 5 testing.