import express from "express";
const server = express();

server.get("/mylogin", (req, res) => {
  res.json({
    email: "teste@teste.com",
    password: "teste1234",
  });
});

server.listen(5000);
