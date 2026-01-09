//Lắng nghe 1 request dạng get : Lấy dữ liệu khi ai đó gửi yêu cầu get tới đường dẫn
//Chạy 1 hàm gọi lại nhận về 2 tham số requset và responde
//Thêm mã trạng thái mà server trả về
import Task from "../models/Task.js";

export const getAllTasks = async (req, res)=> {
    try{
        //find() : lấy toàn bộ dữ liệu từ Collection Task
        //Sắp xếp theo nhiệm vụ mới nhất : sort từ dưới lên
        const tasks = await Task.find().sort({createdAt:-1});
        res.status(200).json(tasks);
    }
    catch(err){
        console.error("Lỗi khi gọi getAllTasks",err);
        res.status(500).send({
            message: "Lỗi hệ thống"
        })
    }
}
export const createTask = async (req,res)=>{
    try{
        const {title} = req.body;
        const task = new Task({title});
        const newTask = await task.save();
        res.status(201).json(newTask);
    }
    catch(err){
        console.error("Lỗi khi gọi createTask",err);
        res.status(500).send({
            message: "Lỗi hệ thống"
        })
    }
}
//201 : tạo thành công và trả về json
//Khi Update nhiệm vụ thì phải biết đó là nhiệm vụ nào => cần gửi kèm id của nhiệm vụ
export const updateTask = async (req,res)=>{
    try{
        //Lấy các trường có thể update
        const {title,status,completedAt} = req.body;
        //Tạo 1 biến để lấy nhiệm vụ sau khi update
        // 3 tham số : req.params.id, đối tượng cần thay đổi, giá trị mới là true để cập nhật
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,//id không được để trong ngoặc nhọn
            {
                title,status,completedAt
            },
            {new : true}, // trả về giá trị sau khi update
        );
        //gửi sai id hoặc gì đó trả v ề 404, phải xem update có tồn tại không
        if(!updatedTask){
            res.status(404).json({message : "Nhiệm vụ không tồn tại"})
        }
        res.status(201).json(updatedTask);
    }
    catch(err){
        console.error("Lỗi khi gọi updateTask",err);
        res.status(500).send({
            message: "Lỗi hệ thống"
        })
    }
}

export const deleteTask = async (req,res)=>{
    try{
        const id = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(id);
        //Khi thay đổi thì luôn phải kiểm tra xem nó có tồn tại hay không
        if(!deleteTask){
            res.status(404).json({message : "Nhiệm vụ không tồn tại"})
        }
        res.status(201).json(deleteTask);
    }
    catch(err){
        console.error("Lỗi khi gọi deleteTask",err);
        res.status(500).send({
            message: "Lỗi hệ thống"
        })
    }
}
