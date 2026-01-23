# Quick Start Guide

## 1. MongoDB Atlas Setup (One-time)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Go to Security → Database Access → Add New Database User
5. Go to Deployment → Clusters → Connect
6. Copy your connection string
7. Replace `<username>`, `<password>`, and database name in the string

## 2. Backend Setup & Run

```bash
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env file with your MongoDB URI
# (Open with notepad or VS Code and update MONGO_URI)

# Start backend
npm start
```

✅ Backend running on `http://localhost:5000`

## 3. Frontend Setup & Run (in new terminal)

```bash
cd frontend

# Install dependencies
npm install

# Start frontend
npm start
```

✅ Frontend running on `http://localhost:3000`

## 4. Test the Application

1. Browser will automatically open at `http://localhost:3000`
2. Fill in the form:
   - Name: Your name
   - Email: Your email
   - Message: Any message
   - Category: Select one
3. Click "Submit"
4. See your data appear below
5. Try Edit and Delete buttons

## 📁 Project Structure

```
testing/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DataForm.js      (Form to submit data)
│   │   │   ├── DataList.js      (Display all data)
│   │   │   └── *.css            (Styling)
│   │   ├── App.js               (Main component)
│   │   └── index.js             (Entry point)
│   └── package.json
│
└── backend/
    ├── models/
    │   └── Data.js              (MongoDB schema)
    ├── routes/
    │   └── dataRoutes.js        (API endpoints)
    ├── server.js                (Express server)
    ├── package.json
    └── .env                     (Your credentials)
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MONGO_URI in .env is correct |
| Can't connect to MongoDB | Whitelist your IP in MongoDB Atlas |
| Frontend won't start | Delete node_modules, run npm install again |
| Port 3000/5000 in use | Change PORT in .env or kill the process |

## 📋 What Each Endpoint Does

| Method | URL | Purpose |
|--------|-----|---------|
| POST | `/api/data` | Add new data |
| GET | `/api/data` | Get all data |
| GET | `/api/data/:id` | Get one data item |
| PUT | `/api/data/:id` | Update data |
| DELETE | `/api/data/:id` | Delete data |

## 🚀 Deployment

### Deploy Backend to Render
1. Push code to GitHub
2. Create Render account
3. Create Web Service from GitHub repo
4. Set environment variables (MONGO_URI, PORT)
5. Deploy

### Deploy Frontend to Vercel
1. Push code to GitHub
2. Create Vercel account
3. Import GitHub repo
4. Update API URL to production backend
5. Deploy

---

**Need help?** Check the main README.md file for detailed instructions.
