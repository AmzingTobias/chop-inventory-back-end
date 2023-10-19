import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.send("Chop inventory server");
});

app.listen(port, () => {
  console.log(`[Chop inventory server]: Server is running on port: ${port}`);
});
