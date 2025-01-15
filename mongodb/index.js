const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://prajeshprajapati:prajesh12345@cluster0.agn5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Mogodb connected"))
  .catch((err) => console.log("Mongodb error", err));

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.use(express.urlencoded({ extends: false }));

app.use((req, res, next) => {
  console.log("Hello From Middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("Hello From Middleware 2");
  next();
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
      <ul>
      ${allDbUsers
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")}
      </ul>`;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});

  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Doe" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "Success" });
});

app.listen(PORT, () => console.log(`Server listening at port :${PORT}`));
