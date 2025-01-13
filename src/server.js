// File: src/server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import connectDB from "./db/connection.js";

dotenv.config(); // read .env in node.js 18.x
const app = express();
app.use(express.json());
/*
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));
*/

/* retired DB connection
try {
  // Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log("MongoDB connection failed");
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
*/
// Connect to the database
connectDB();

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use routes in /routers
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

// Middleware (Handle undefined routes)

app.use("/", (req, res) => {
  res
    .status(404)
    .send(
      '<div style="font-family: Arial, sans-serif; background-color: #f8d7da; color: #721c24; text-align: center; padding: 50px; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #f5c6cb; background-color: #f5c6cb; border-radius: 8px;"> <h1 style="font-size: 2.5em; margin-bottom: 20px;">Frontend Server is Down</h1> <p style="font-size: 1.2em;">We are currently experiencing technical difficulties. Our team is working hard to resolve the issue. Please check back later.</p><p style="font-size: 1.2em;">Thank you for your patience!</p></div>'
    );
});
/**/

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
