import React from 'react';

const NotFound = () => {
    return (
        //flex flex-col : sắp xếp phần tử con theo cột
        //min-h-screen : chiều cao của khối tối thiểu bằng chiều cao màn hình
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
            <img src="404_NotFound.png" alt="404_NotFound" className="max-w-full mb-6 w-96"/>
            <p className="text-xl font-semibold text-gray-900">
                Bạn đang đi vào vùng cấm địa 🚫
            </p>
        {/*    Quay về trang chủ*/}
            <a href="/" className="inline-block px-6 py-3 mt-6 font-medium text-while transition shadow-md bg-priamry rounded-2xl
             hover:bg-primary-dark">
                Quay về trang chủ
            </a>
        </div>
    )
}

export default NotFound;