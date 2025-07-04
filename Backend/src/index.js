import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth"
import product from "./routes/product"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
const Port = 5050;

app.use("/auth",auth)
app.use("/product",product)
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Save form data endpoint
// app.post();

// Signup Route
// app.post();

// // Login Route
// app.post();

// Start Server
app.listen(Port, '0.0.0.0', () => {
  console.log('Server is listening on port 5050 for all interfaces')
});
;
