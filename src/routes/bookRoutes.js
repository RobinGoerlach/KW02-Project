// File: routes/bookRoutes.js
import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// GET /books: Retrieve all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("user");
    res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /books/:id: Retrieve a specific book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("user");
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST /books: Create a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// PUT /books/:id: Update a specific book by ID
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// DELETE /books/:id: Delete a specific book by ID
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Other book routes...
export default router;
