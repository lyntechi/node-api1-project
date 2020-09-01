const express = require("express");
const server = express();
server.use(express.json());
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
server.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  getUser = users.find((user) => user.id === id);
  res.status(200).json({ data: getUser });
});
server.post("/api/users", (req, res) => {
  const body = req.body;
  console.log(req.body);
  users.push(body);
  res.status(201).json({ data: users });
});
server.delete('api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const deleteUser = users.filter(user => user.id !== id)
    res.status(204).end();
    res.status(200).json(deleteUser)
})
server.listen(port, () => {
  console.log("server up");
});
