# 🚀 Spacey Science App - Backend API

A role-based backend API built using Node.js, Express, MongoDB Atlas, and JWT authentication.

------------------------------------------------------------
📌 FEATURES
------------------------------------------------------------

- User Registration (Student / Teacher)
- User Login with JWT Authentication
- Role-based Authorization
- Student Lesson Completion
- Teacher View Students Progress
- MongoDB Atlas Integration
- Ready for Render Deployment

------------------------------------------------------------
🛠 TECH STACK
------------------------------------------------------------

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Bcrypt
- CORS
- Dotenv

------------------------------------------------------------
📁 PROJECT STRUCTURE
------------------------------------------------------------

backend/
│
├── models/
│   ├── User.js
│   └── Status.js
│
├── routes/
│   ├── authRoutes.js
│   ├── studentRoutes.js
│   └── teacherRoutes.js
│
├── middleware/
│   ├── auth.js
│   └── role.js
│
├── server.js
├── package.json
├── .env

------------------------------------------------------------
⚙️ INSTALLATION (GitHub Codespaces)
------------------------------------------------------------

1. Open terminal inside backend folder:

   cd backend

2. Install dependencies:

   npm install

3. Create a .env file in backend folder:

   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=spacey_secret_key_2025
   PORT=5000

⚠ IMPORTANT:
- Do NOT commit .env file
- Add .env to .gitignore

------------------------------------------------------------
▶️ RUN SERVER
------------------------------------------------------------

npm start

OR

node server.js

You should see:

MongoDB Connected
Server running on port 5000

------------------------------------------------------------
🌍 BASE URL
------------------------------------------------------------

Local:
http://localhost:5000

GitHub Codespaces:
https://yourcodespaceurl-5000.app.github.dev

------------------------------------------------------------
🔐 AUTHENTICATION FLOW
------------------------------------------------------------

1. Register
2. Login
3. Copy token
4. Use token in protected routes

Header format:

Authorization: Bearer YOUR_TOKEN_HERE

------------------------------------------------------------
📡 API ENDPOINTS
------------------------------------------------------------

1️⃣ REGISTER

POST /api/auth/register

Body (JSON):

{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "role": "student",
  "schoolId": "SCH001"
}

Response:

{
  "message": "User registered successfully"
}

------------------------------------------------------------

2️⃣ LOGIN

POST /api/auth/login

Body:

{
  "email": "john@gmail.com",
  "password": "123456"
}

Response:

{
  "token": "JWT_TOKEN_HERE"
}

------------------------------------------------------------

3️⃣ STUDENT - COMPLETE LESSON

POST /api/student/complete

Header:
Authorization: Bearer STUDENT_TOKEN

Body:

{
  "lessonId": "lesson1",
  "score": 8
}

Response:

{
  "message": "Lesson completed",
  "badge": "Mars Explorer"
}

------------------------------------------------------------

4️⃣ TEACHER - VIEW STUDENTS

GET /api/teacher/students

Header:
Authorization: Bearer TEACHER_TOKEN

Response:

[
  {
    "name": "John",
    "email": "john@gmail.com",
    "totalScore": 8,
    "lessonsCompleted": 1
  }
]

------------------------------------------------------------
🎯 ROLE RULES
------------------------------------------------------------

Student:
- Can Register
- Can Complete Lesson
- Cannot View Students

Teacher:
- Can Register
- Cannot Complete Lesson
- Can View Students

------------------------------------------------------------
🚀 DEPLOY TO RENDER
------------------------------------------------------------

1. Push project to GitHub
2. Go to https://render.com
3. Create New Web Service
4. Connect GitHub repo
5. Add Environment Variables:

   MONGO_URI
   JWT_SECRET

6. Start Command:

   node server.js

7. Deploy

------------------------------------------------------------
🔒 SECURITY
------------------------------------------------------------

- Passwords hashed using bcrypt
- JWT expires in 1 hour
- Role-based middleware protection
- MongoDB Atlas used for production database

------------------------------------------------------------
👩‍💻 Spacey Science App Backend
------------------------------------------------------------

Built for learning full-stack development.
