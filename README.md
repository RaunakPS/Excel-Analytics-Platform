# 📊 Excel Analytics Platform

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application developed as part of my internship. The platform is designed to upload, parse, and visualize Excel data with rich analytics and visual charts. It features a clean structure, real-time insights, and role-based access handling.

---

## 📁 Project Structure

```
excel-analytics/
│
├── backend/        # Node + Express server, Excel parsing
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/       # React.js frontend with charts
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Key Features

- ✅ Upload and parse Excel files
- ✅ Store parsed data in **MongoDB** for persistence
- ✅ Dynamic chart rendering using **Chart.js**
- ✅ Responsive React UI for an optimal user experience
- ✅ Well-structured **RESTful API** for frontend-backend communication
- ✅ Secure handling of **environment variables**
- ✅ Modular and clean codebase for easy maintenance and scalability

---

## ⚙️ Tech Stack

| Frontend      | Backend       | Database      | Core Libraries                              |
|---------------|---------------|---------------|---------------------------------------------|
| React.js      | Express.js    | MongoDB       | XLSX (Excel parsing), Chart.js              |
| Axios         | Node.js       | MongoDB Atlas | Multer (file uploads), dotenv (env vars)    |
|               |               |               | Mongoose (MongoDB ODM)                      |

---

## 🧑‍💻 Getting Started

To get a local copy of this project up and running for development and testing purposes, follow these steps:

### 🔁 1. Clone the Repository

```bash
git clone https://github.com/Vickey0088/Excel-Analytics-Platform-.git
cd Excel-Analytics-Platform-
```

> **Note:** This repository was originally developed by *Vickey Yadav* and has been cloned for my internship project.

---

### 🔧 2. Backend Setup

Navigate into the `backend/` directory and install the dependencies:

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend/` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

- `PORT`: The port on which the backend server will run (default is 5000).
- `MONGO_URI`: Your MongoDB connection string. You can create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to get this.

#### Run Backend

```bash
npm start
```

The backend API will be accessible at:  
📍 **http://localhost:5000/api**

---

### 💻 3. Frontend Setup

Open a new terminal, navigate back to the root project directory, then move into the `frontend/` directory and install the dependencies:

```bash
cd ../frontend
npm install
```

#### Run Frontend

```bash
npm start
```

The React application will launch in your browser at:  
🌐 **http://localhost:3000**

---
