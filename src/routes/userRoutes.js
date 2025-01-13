// File: routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET /users: Retrieve all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("readingList.bookRefId");
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /users/:id: Retrieve a specific user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "readingList.bookRefId"
    );
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST /users: Create a new user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// PUT /users/:id: Update a specific user by ID
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// DELETE /users/:id: Delete a specific user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Other user routes...
export default router;
