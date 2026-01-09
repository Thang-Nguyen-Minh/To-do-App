import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,//bắt buộc phải có
            trim: true,
        },
        status: {
            type: String,
            enum: ["active", "complete"],//chỉ chấp nhận 2 trạng thái active và complete
            default: "active",//không truyền gì vào thì mặc định là active
        },
        completedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,//createdAt và updatedAt tự động thêm vào
    }
);
//Từ bảng tự định nghĩa sinh ra 1 model tên là Task
const Task = mongoose.model("Task", taskSchema);
export default Task;