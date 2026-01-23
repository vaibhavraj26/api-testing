# Testing Database Application

A full-stack testing application with **React** frontend, **Node.js** backend, and **MongoDB Atlas** database.

## Project Structure

```
testing/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/  # React components (DataForm, DataList)
│   │   ├── App.js       # Main App component
│   │   └── index.js     # React entry point
│   └── package.json
│
└── backend/           # Node.js Express backend
    ├── models/        # MongoDB models (Data schema)
    ├── routes/        # API routes
    ├── server.js      # Express server entry point
    ├── package.json
    └── .env.example   # Environment variables template
```

## Features

### Frontend (React)
- **Data Form Component**: Submit name, email, message, and category
- **Data List Component**: Display all submitted data in a grid layout
- **Edit Functionality**: Modify existing data entries
- **Delete Functionality**: Remove data entries
- **Real-time Updates**: Instantly see changes in the UI
- **Error Handling**: Display error messages for failed operations
- **Responsive Design**: Mobile-friendly interface

### Backend (Node.js + Express)
- **CORS Support**: Allow frontend to communicate with backend
- **MongoDB Integration**: Store and retrieve data using Mongoose
- **RESTful API**:
  - `POST /api/data` - Create new data entry
  - `GET /api/data` - Retrieve all data
  - `GET /api/data/:id` - Retrieve single data entry
  - `PUT /api/data/:id` - Update data entry
  - `DELETE /api/data/:id` - Delete data entry
- **Data Validation**: Ensure required fields are provided
- **Error Handling**: Comprehensive error messages

### Database (MongoDB Atlas)
- **Cloud-hosted**: MongoDB Atlas for secure data storage
- **Schema Validation**: Mongoose schema for data integrity
- **Timestamp**: Automatic creation date tracking

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
