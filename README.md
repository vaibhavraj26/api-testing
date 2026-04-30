# Testing Database Application

A full-stack testing application with **React** frontend, **Node.js** backend, and **MongoDB Atlas** database. Optimized for deployment on **Vercel** (frontend) and **Render** (backend).

## Project Structure

```
api-testing/
├── frontend/              # React frontend (Vercel)
│   ├── src/
│   │   ├── components/    # React components (DataForm, DataList)
│   │   ├── App.js         # Main App component
│   │   └── index.js       # React entry point
│   ├── package.json
│   ├── vercel.json        # Vercel deployment config
│   └── .env.production    # Production environment variables
│
└── backend/               # Node.js Express backend (Render)
    ├── models/            # MongoDB models (Data schema)
    ├── routes/            # API routes
    ├── server.js          # Express server entry point
    ├── package.json
    ├── render.yaml        # Render deployment config
    └── .env.example       # Environment variables template
```

## Features

### Frontend (React)
- Data Form Component - Submit name, email, message, and category
- Data List Component - Display all submitted data in a grid layout
- Edit Functionality - Modify existing data entries
- Delete Functionality - Remove data entries
- Real-time Updates - Instantly see changes in the UI
- Error Handling - Display error messages for failed operations
- Responsive Design - Mobile-friendly interface

### Backend (Node.js + Express)
- CORS Support - Allow frontend to communicate with backend
- MongoDB Integration - Store and retrieve data using Mongoose
- RESTful API endpoints:
  - `POST /api/data` - Create new data entry
  - `GET /api/data` - Retrieve all data
  - `GET /api/data/:id` - Retrieve single data entry
  - `PUT /api/data/:id` - Update data entry
  - `DELETE /api/data/:id` - Delete data entry
- Data Validation - Ensure required fields are provided
- Error Handling - Comprehensive error messages
- Health Check - `GET /health` endpoint

### Database (MongoDB Atlas)
- Cloud-hosted secure data storage
- Mongoose schema for data integrity
- Automatic creation date tracking

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 14+ installed
- MongoDB Atlas account (free tier available)
- Git

### 1. MongoDB Atlas Setup (One-time)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Go to Security → Database Access → Add New Database User
5. Go to Deployment → Clusters → Connect
6. Copy your connection string
7. Replace `<username>`, `<password>`, and database name in the string

### 2. Backend Setup & Run

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
copy .env.example .env
# OR on Linux/Mac: cp .env.example .env

# Edit .env file with your MongoDB URI
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
# PORT=5000

# Start backend
npm start
```

✅ Backend running on `http://localhost:5000`

### 3. Frontend Setup & Run (in new terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start frontend
npm start
```

✅ Frontend running on `http://localhost:3000`

### 4. Test the Application

1. Browser will automatically open at `http://localhost:3000`
2. Fill in the form with:
   - Name
   - Email
   - Message
   - Category
3. Click "Submit"
4. View your entry in the Data List below
5. Edit or Delete entries as needed

---

## 🌐 Deployment

### Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `testing-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `MONGO_URI` = Your MongoDB Atlas connection string
   - `NODE_ENV` = `production`
6. Click **"Create Web Service"**
7. Copy your Render URL (e.g., `https://testing-backend-xxxx.onrender.com`)

### Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
5. Add Environment Variables:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://testing-backend-xxxx.onrender.com/api` (your Render backend URL)
6. Click **"Deploy"**

Your application is now live! 🎉

---

## Backend API Documentation

### Health Check
```
GET /health
Response: { "status": "Server is running" }
```

### Create Data Entry
```
POST /api/data
Body: { "name": string, "email": string, "message": string, "category": string }
Response: { "data": { ...entry } }
```

### Get All Data
```
GET /api/data
Response: { "data": [...entries] }
```

### Get Single Entry
```
GET /api/data/:id
Response: { "data": {...entry} }
```

### Update Entry
```
PUT /api/data/:id
Body: { "name": string, "email": string, "message": string, "category": string }
Response: { "data": {...updated_entry} }
```

### Delete Entry
```
DELETE /api/data/:id
Response: { "message": "Data deleted successfully" }
```

---

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
PORT=5000
NODE_ENV=production
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://testing-backend-xxxx.onrender.com/api
CI=false
```

---

## Technologies Used

- **Frontend**: React 18, Axios, CSS3
- **Backend**: Node.js, Express 4, Mongoose
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## License

This project is open source and available under the MIT License.

## Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas Account** ([Create here](https://www.mongodb.com/cloud/atlas))

### 1. MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string:
   - Go to Clusters → Connect → Connect your application
   - Copy the connection string

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file from .env.example
copy .env.example .env

# Edit .env and replace with your MongoDB Atlas URI
# Example: mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

**Start Backend:**
```bash
npm start          # Production mode
# or
npm run dev        # Development mode with hot reload (requires nodemon)
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will run on `http://localhost:3000`

## Usage

1. **Open your browser** and go to `http://localhost:3000`
2. **Fill the form** with:
   - Your name
   - Your email
   - A message
   - Select a category (Frontend, Backend, Database)
3. **Click Submit** to save data to MongoDB Atlas
4. **View submitted data** below the form
5. **Edit** any entry by clicking the Edit button
6. **Delete** any entry by clicking the Delete button

## Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=5000
```

## API Documentation

### Create Data
```
POST /api/data
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Testing message",
  "category": "frontend"
}
Response: { data: { _id, name, email, message, category, createdAt } }
```

### Get All Data
```
GET /api/data
Response: { data: [{ _id, name, email, message, category, createdAt }] }
```

### Get Single Data
```
GET /api/data/:id
Response: { data: { _id, name, email, message, category, createdAt } }
```

### Update Data
```
PUT /api/data/:id
Body: { "name", "email", "message", "category" }
Response: { data: { _id, name, email, message, category, createdAt } }
```

### Delete Data
```
DELETE /api/data/:id
Response: { message: "Data deleted successfully" }
```

## Technologies Used

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 | UI Components |
| Styling | CSS3 | Responsive Design |
| HTTP Client | Axios | API Communication |
| Backend | Node.js | Runtime |
| Framework | Express.js | Web Server |
| Database | MongoDB Atlas | Cloud Database |
| ODM | Mongoose | Schema Management |
| Middleware | CORS | Cross-Origin Support |
| Environment | dotenv | Configuration |

## Troubleshooting

### Backend won't connect to MongoDB
- Check if MongoDB Atlas cluster is running
- Verify connection string in `.env`
- Ensure IP whitelist includes your current IP
- Check database user credentials

### Frontend can't connect to backend
- Ensure backend is running on `http://localhost:5000`
- Check `proxy` in frontend `package.json`
- Check CORS configuration in backend

### Port already in use
- Change `PORT` in backend `.env` (default: 5000)
- Change port in frontend `package.json` proxy

## Deployment

### Backend (Render or Heroku)
1. Create account on Render or Heroku
2. Set environment variables (MONGO_URI, PORT)
3. Connect your git repository
4. Deploy

### Frontend (Vercel)
1. Create account on Vercel
2. Import your git repository
3. Update API base URL to production backend URL
4. Deploy

## License

MIT

## Support

For issues or questions, check the console for error messages and verify all setup steps.
