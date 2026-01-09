import express from 'express';
import taskRoute from './routes/tasksRouters.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
//Tạo 1 ứng dụng Express
const app=express();
dotenv.config();

const PORT = process.env.PORT || 5001;
app.use(express.json());//phải nằm trước api thì mới dịch sang được đcm
app.use("/api/tasks",taskRoute);
//Kết nối CSDL xong thì server mới chạy ở cổng 5001
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
});


