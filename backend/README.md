# Backend - Node.js Express Server

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
copy .env.example .env
```

3. Update `.env` with your MongoDB Atlas URI:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
PORT=5000
```

## Running the Server

```bash
npm start          # Production mode
npm run dev        # Development mode with auto-reload
```

The server will start on `http://localhost:5000`

## API Endpoints

- `GET /health` - Health check
- `POST /api/data` - Create new data
- `GET /api/data` - Get all data
- `GET /api/data/:id` - Get single data
- `PUT /api/data/:id` - Update data
- `DELETE /api/data/:id` - Delete data
