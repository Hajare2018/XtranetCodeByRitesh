const express = require("express");
const cors = require("cors");
const { userRoutes } = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(cors());

const port = 4300;

app.use("/api", userRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(Error);
  } else {
    console.log(`server is running on port http://localhost:${port}`);
  }
});
