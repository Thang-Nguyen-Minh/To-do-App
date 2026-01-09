import express from "express";
import {createTask, deleteTask, getAllTasks, updateTask} from "../controllers/tasksControllers.js";

const router=express.Router();
//Tạo 1 API

router.get("/",getAllTasks);
//Tạo 1 nhiệm vụ mới cần gửi post Request

router.post("/",createTask);
//put : thay đổi nhiệm vụ

router.put("/:id",updateTask);
//api xóa nhiệm vụ
router.delete("/:id",deleteTask);

export default router;