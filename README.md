﻿# Number_Classification_API

## Overview
The **Number Classification API** takes a number as input and returns interesting mathematical properties about it, along with a fun fact.

## Features
- Accepts GET requests with a number parameter.
- Returns JSON in the specified format.
- Accepts all valid integers as the only possible inputs
- Provides appropriate HTTP status codes

## API Endpoint
### **GET** `https://number-classification.vercel.app/api/classify-number?number=371`


### **Response Format**
#### ✅ **Success Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### ❌ **Error Response (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

## Deployment
The API is publicly accessible at:
```
https://number-classification.vercel.app/api/classify-number?number=371
```

## Installation & Running Locally
### **Prerequisites**
- Node.js

### **Steps**
1. Clone the repository:
   ```sh
   git clone https://github.com/Tukkieee/Number_Classification_API.git
   cd Number_Classification_API
   ```
2. Install dependencies:
   ```sh
   npm install  
   ```
3. Run the API:
   ```sh
   npm start 
   ```
4. Test the API locally:
   ```sh
   curl http://localhost:8080/api/classify-number?number=371
   ```

## Technologies Used
- **Backend:** Node.js (Express.js), CORS
- **Hosting:**  Vercel 
- **External API:** [Numbers API](http://numbersapi.com/#42)
- **Version Control:** GitHub


