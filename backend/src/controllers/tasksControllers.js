//Lắng nghe 1 request dạng get : Lấy dữ liệu khi ai đó gửi yêu cầu get tới đường dẫn
//Chạy 1 hàm gọi lại nhận về 2 tham số requset và responde
//Thêm mã trạng thái mà server trả về
export const getAllTasks = (req,res)=> {
    res.status(200).send("Bạn có 10 việc cần làm");
}
export const createTask = (req,res)=>{
    res.status(201).json({message : "Nhiệm vụ mới đã được thêm vào thành công."})
}
//201 : tạo thành công và trả về json
//Khi Update nhiệm vụ thì phải biết đó là nhiệm vụ nào => cần gửi kèm id của nhiệm vụ
export const updateTask = (req,res)=>{
    res.status(201).json({message : "Nhiệm vụ mới đã được thay đổi vào thành công."})
}

export const deleteTask = (req,res)=>{
    res.status(201).json({message : "Nhiệm vụ đã được xóa thành công."})
}
