import express,{Express,Request,Response} from 'express';
import dotenv from "dotenv";
import * as database from "./config/database";
import cors from 'cors'; 

dotenv.config(); // lấy thông tin từ file .env
database.connect(); // Kết nối database

const app =express();
const PORT = process.env.PORT;
// Cấu hình CORS chỉ cho phép từ cổng 3000

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Cho phép gửi cookie nếu cần
}));
app.get("/hello-world", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});
app.listen(PORT, () => {
  console.log(`App listening or port ${PORT}`);
});
