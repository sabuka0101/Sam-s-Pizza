# 🍕 Sam's Pizza Tbilisi — Full-Stack Web Application

A premium, production-ready, highly polished full-stack website built for **Sam's Pizza** located on Mirian Mepe St, Tbilisi, Georgia. 

This application features an elegant, mobile-responsive frontend with a dynamic menu category filtering system, promo discount calculations, live customer reviews, and immediate delivery integrations with **Wolt** and **Bolt Food**. It also features a fully functional **Admin Panel** to manage items in real-time, handle cloud-based image uploads, and administrate staff accounts.

---

## 🚀 Unified Full-Stack Architecture

Unlike traditional split architectures that run on different ports and cause CORS conflicts, this project is designed as a **unified, full-stack application**. 

- **Backend:** Node.js + Express + Mongoose serving a secure, authenticated REST API.
- **Frontend:** React + Vite + Tailwind CSS v4 + Lucide icons.
- **Development Server:** Runs as a single unified process on port `3000` via Express. Vite is mounted directly as development middleware, allowing instant page reloads and smooth server-client co-existence without CORS configurations.
- **Production Server:** Bundles the client static assets, compiles the TypeScript server into clean, native CommonJS via `esbuild`, and runs on port `3000` on any standard server or container platform (e.g., Google Cloud Run, Render, Vercel).
- **Graceful Keys Fallback:** If MongoDB and Cloudinary keys are not configured yet, the system **automatically falls back** to an in-memory & local JSON-file-based database (`/data/products.json`), and converts uploaded product pictures to persistent base64 Data URIs, keeping the entire application **100% functional out-of-the-box**.

---

## 🛠️ Installation & Setup

### 1. Clone & Install Dependencies
Navigate to the root directory and install all node packages:
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.example` file to create your `.env` configuration file:
```bash
cp .env.example .env
```
Fill in the credentials inside `.env` (detailed keys description below).

### 3. Run the Development Server
Launch the unified server in development mode:
```bash
npm run dev
```
Open your browser and visit: `http://localhost:3000`

### 4. Build & Start in Production
Compile both frontend and backend for deployment, and run the production server:
```bash
npm run build
npm start
```

---

## 🔑 Environment Variables & Credentials Guide

Below are the variables you can configure in your `.env` file:

### Server Settings
* `PORT`: Set to `3000` (the default port for our reverse-proxy and deployments).
* `JWT_SECRET`: Any long, random secret key used to sign secure login session tokens.
* `JWT_EXPIRES_IN`: Expiry duration for active sessions (e.g., `7d` for 7 days).

### MongoDB Atlas Database Integration (Optional Fallback)
* `MONGODB_URI`: Connects your website to a live database. If omitted, the server automatically reads and writes to a local file database in `/data/` within the container.
  * **How to get:** Register a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create a free M0 Cluster, click "Connect", select "Drivers", and copy your connection string. Replace `<password>` with your database user's password.

### Cloudinary Image Cloud Storage (Optional Fallback)
* `CLOUDINARY_CLOUD_NAME`: Your Cloudinary account cloud name.
* `CLOUDINARY_API_KEY`: Your Cloudinary credential API key.
* `CLOUDINARY_API_SECRET`: Your Cloudinary credential API secret.
  * **How to get:** Create a free developer account on [Cloudinary](https://cloudinary.com/). Your Cloud Name, API Key, and API Secret are immediately displayed in your dashboard.
  * **Fallback:** If Cloudinary keys are missing, the admin dashboard uploads files directly as base64 Data URIs, allowing zero-friction offline previews.

### Default Staff Credentials (Seeding)
* `SUPERADMIN_USERNAME`: The initial login username (defaults to `superadmin` if omitted).
* `SUPERADMIN_PASSWORD`: The initial login password (defaults to `superadminpassword123` if omitted).
  * **Note:** The server automatically seeds this account on first start, which you can use to log into the Admin Panel at `/admin/login`.

### Delivery Platform Referrals
* `VITE_WOLT_URL`: The referral or shop link leading to Wolt Food Tbilisi.
* `VITE_BOLT_URL`: The referral or shop link leading to Bolt Food Tbilisi.

---

## 📂 Code Structure & Key Modules

* `server.ts` — Server entry point. Orchestrates db connection, security middlewares, Multer, API routes, and mounts Vite.
* `server/db.ts` — Connection manager and database abstraction layer. Gracefully falls back to local JSON if MONGODB_URI is not set.
* `server/cloudinary.ts` — Image uploader configuration with smart Base64 encoding fallback.
* `src/main.tsx` & `src/App.tsx` — Client entry point and React Router mapping.
* `src/types.ts` — Shared frontend interface models (Product, Admin, AuthState).
* `src/index.css` — Global CSS incorporating Tailwind CSS v4, custom "Space Grotesk" typography, and cozy warm design palettes.
* `src/components/` — Modular React view layers (Home, Menu, Reviews, AdminLogin, AdminDashboard, Header, Footer).
