# Project Name Thought
---
## 🚀 Project Highlights

- ✅ Robust file structure for scalability  
- ✅ Connected MongoDB database with event handling  
- ✅ Authentication with JWT & bcrypt  
- ✅ Middleware, utilities, and error handling implemented  
- ✅ Cloudinary file uploads with `multer` setup  

---

# 📦 Backend Project Setup (Production Grade)
---

## 🏗️ Project Setup and Structure

### 🧠 Concepts Learned

- `.env` file setup using [`dotenv`](https://www.npmjs.com/package/dotenv)
- Modular, scalable project architecture
- MongoDB connection and connection event logging
- Global error handling
- Reading and debugging errors efficiently

---

## 🔗 Database

- MongoDB connected using [Mongoose](https://www.npmjs.com/package/mongoose)
- Connection event listeners (connected, error, disconnected)
- Error-first development for better debugging

---

## 🧰 Middlewares Used

| Feature | Package | Description |
|--------|---------|-------------|
| Cross-Origin Resource Sharing | [`cors`](https://www.npmjs.com/package/cors) | Allows APIs to be accessible from different origins |
| JSON Parsing | [`express.json()`](https://expressjs.com/en/api.html#express.json) | Parses incoming JSON data with size limits |
| URL Encoded Data | [`express.urlencoded()`](https://expressjs.com/en/api.html#express.urlencoded) | Accepts form data sent via URLs |
| Cookies | [`cookie-parser`](https://www.npmjs.com/package/cookie-parser) | Read and modify cookies from client to server |

---

## 🧩 Utilities

- Created **custom utility functions** for repetitive tasks  
- Example: token generator, error formatters, etc.  
- Promotes **code reusability and maintainability**

---

## 🗃️ Models and Schemas

- User & Video models created using [Mongoose](https://mongoosejs.com/)
- Used [`bcrypt`](https://www.npmjs.com/package/bcrypt) to hash passwords
- Password hashing done **before saving** using `pre-save` hooks
- Token-based authentication implemented using [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)

---
# 📦 Backend Project Setup Complete (Production Grade)


> **Learning Source:** Inspired by [Chai aur Code](https://www.youtube.com/@HiteshChoudharydotcom) by `@hitesh`  
> **Status:** ✅ Initial setup completed with production-like structure **Date** : 01 / 08 / 2025
