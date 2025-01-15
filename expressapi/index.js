const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extends: false }));

app.use((req, res, next) => {
  console.log("Hello From Middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("Hello From Middleware 2");
  next();
});

app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    return res.send(`Delete user with ID: ${req.params.id}`);
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server listening at port :${PORT}`));
