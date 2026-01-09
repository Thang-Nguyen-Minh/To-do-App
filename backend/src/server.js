import express from 'express';
//Tạo 1 ứng dụng Express
const app=express();
//Cho ứng dụng lắng nghe trên 1 cổng đơn giản là vì cổng đó đang rảnh
app.listen(5001,()=>{
    console.log('Server running on port 5001');
})
//Tạo 1 API
//Lắng nghe 1 request dạng get : Lấy dữ liệu khi ai đó gửi yêu cầu get tới đường dẫn
//Chạy 1 hàm gọi lại nhận về 2 tham số requset và responde
//Thêm mã trạng thái mà server trả về
app.get("/api/tasks", (req,res)=>{
    res.status(200).send("Bạn có 10 việc cần làm");
})
//Tạo 1 nhiệm vụ mới cần gửi post Request
//201 : tạo thành công và trả về json
app.post("/api/tasks",(req,res)=>{
    res.status(201).json({message : "Nhiệm vụ mới đã được thêm vào thành công."})
})
//put : thay đổi nhiệm vụ
//Khi Update nhiệm vụ thì phải biết đó là nhiệm vụ nào => cần gửi kèm id của nhiệm vụ
app.put("/api/tasks/:id",(req,res)=>{
    res.status(201).json({message : "Nhiệm vụ mới đã được thay đổi vào thành công."})
})
//api xóa nhiệm vụ
app.delete("/api/tasks/:id",(req,res)=>{
    res.status(201).json({message : "Nhiệm vụ mới đã được thay đổi vào thành công."})
})
