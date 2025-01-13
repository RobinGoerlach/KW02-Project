const apiBaseUrl = "http://localhost:3000";

// Fetch and display users
async function fetchUsers() {
  const response = await fetch(`${apiBaseUrl}/users`);
  const users = await response.json();

  const usersList = document.getElementById("users");
  usersList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;
    usersList.appendChild(li);
  });
}

// Fetch and display books
async function fetchBooks() {
  const response = await fetch(`${apiBaseUrl}/books`);
  const books = await response.json();

  const booksList = document.getElementById("books");
  booksList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    booksList.appendChild(li);
  });
}

// Add a new user
document
  .getElementById("user-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const response = await fetch(`${apiBaseUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName }),
    });

    if (response.ok) {
      alert("User added successfully!");
      fetchUsers();
    } else {
      alert("Failed to add user");
    }
  });

// Initialize
fetchUsers();
fetchBooks();
