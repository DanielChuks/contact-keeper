const express = require("express");

const app = express();

app.get("/", (req, res) =>
   res.json({
      msg: "This is the first request to the home page of this application"
   })
);

// Defining Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));