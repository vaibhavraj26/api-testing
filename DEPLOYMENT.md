# Deployment Guide

## 🚀 Deploy Backend to Render

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Render
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
   - `PORT` = `5000`
6. Click **"Create Web Service"**

### Step 3: Copy Your Backend URL
After deployment, Render will give you a URL like:
```
https://testing-backend-xxxx.onrender.com
```
**Save this URL - you'll need it for the frontend!**

---

## 🌐 Deploy Frontend to Vercel

### Step 1: Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
5. Add Environment Variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://testing-backend-xxxx.onrender.com/api` (your Render URL + `/api`)
6. Click **"Deploy"**

---

## ⚙️ Environment Variables Summary

### Backend (Render)
| Variable | Value |
|----------|-------|
| `MONGO_URI` | `mongodb+srv://...` (your MongoDB Atlas URI) |
| `PORT` | `5000` |

### Frontend (Vercel)
| Variable | Value |
|----------|-------|
| `REACT_APP_API_URL` | `https://your-backend.onrender.com/api` |

---

## 🔧 Troubleshooting

### CORS Error
If you get CORS errors, the backend already has CORS enabled. Make sure the frontend is using the correct backend URL.

### Backend Not Starting on Render
- Check that `Root Directory` is set to `backend`
- Verify environment variables are set correctly
- Check Render logs for errors

### Frontend API Calls Failing
- Verify `REACT_APP_API_URL` is set in Vercel
- Make sure to include `/api` at the end of the URL
- Redeploy after changing environment variables

### MongoDB Connection Issues
- Whitelist `0.0.0.0/0` in MongoDB Atlas Network Access (allows all IPs for Render)
- Verify username/password in connection string

---

## 📋 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render
- [ ] Backend environment variables set (MONGO_URI, PORT)
- [ ] Backend URL copied
- [ ] Frontend deployed on Vercel
- [ ] Frontend environment variable set (REACT_APP_API_URL)
- [ ] Test the deployed application

---

## 🔗 Useful Links

- [Render Dashboard](https://dashboard.render.com)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [MongoDB Atlas](https://cloud.mongodb.com)
