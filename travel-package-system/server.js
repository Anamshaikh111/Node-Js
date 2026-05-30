const express = require("express");

const app = express();

app.use(express.json());

const packageRoutes = require("./routes/packageRoutes");

app.use("/packages", packageRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});