# Fullstack E‑commerce Scaffold

This repository contains a minimal fullstack e‑commerce starter (backend + frontend).

Server: Node.js + Express + MongoDB
Client: React + Vite + TypeScript + Tailwind CSS

Quick start (local):

1. Install dependencies for server and client

```bash
cd server
npm install
cd ../client
npm install
```

2. Configure environment variables

Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.

3. Run server and client

Server:
```bash
cd server
npm run dev
```

Client:
```bash
cd client
npm run dev
```

The client expects the API at `http://localhost:5000`.

This scaffold provides basic product listing, cart, checkout placeholder, auth endpoints, and a seed script for products.
