const express = require("express");
const server = express();
const port = 8000;
let users = [
  { id: 1, name: "Lynda", bio: "I like fried chicken" },
  { id: 2, name: "William", bio: "Real estate is a life changer" },
];
server.get("/api/users", (req, res) => {
  res.status(200).json({ data: users });
  res
    .status(500)
    .json({ errorMessage: "The users information could not be retrieved." });
});
server.post("/api/users", (req, res) => {
  const body = req.body;
  users.push(body);
  res.status(201).json({ data: users });
});
server.listen(port, () => {
  console.log("server up");
});
