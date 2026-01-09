import express from 'express';
import taskRoute from './routes/tasksRouters.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
//Tạo 1 ứng dụng Express
const app=express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5001;
app.use("/api/tasks",taskRoute);
//Cho ứng dụng lắng nghe trên 1 cổng đơn giản là vì cổng đó đang rảnh
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
