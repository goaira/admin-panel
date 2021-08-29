import express from "express";
import routes from "./routes/routes";

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server listing at http://localhost:${port}`);
  routes(app);
});
