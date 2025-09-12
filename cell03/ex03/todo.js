// ฟังก์ชันสำหรับบันทึกรายการ TO DO ลงใน cookie
function saveToCookie() {
    // โค้ดสำหรับบันทึกข้อมูลจาก 'ft_list' ไปยัง cookie
    // คุณอาจจะใช้ JSON.stringify() เพื่อแปลงข้อมูลให้อยู่ในรูปแบบที่บันทึกได้ง่าย
}

// ฟังก์ชันสำหรับโหลดรายการ TO DO จาก cookie
function loadFromCookie() {
    // โค้ดสำหรับอ่านข้อมูลจาก cookie และสร้าง div รายการ TO DO
    // คุณอาจจะใช้ JSON.parse() เพื่อแปลงข้อมูลจาก cookie กลับมาเป็น object/array
}

// ฟังก์ชันสำหรับสร้างรายการ TO DO ใหม่
function createToDo(text) {
    const newDiv = document.createElement('div');
    newDiv.textContent = text;
    // เพิ่ม event listener สำหรับการคลิกเพื่อลบ
    newDiv.addEventListener('click', () => {
        // ใช้ confirm() เพื่อเปิดกล่องยืนยัน
        if (confirm("Do you want to remove this TO DO?")) {
            newDiv.remove();
            saveToCookie(); // บันทึกการเปลี่ยนแปลง
        }
    });

    // นำไปเพิ่มไว้ที่ด้านบนสุดของรายการ
    const ftList = document.getElementById('ft_list');
    ftList.prepend(newDiv);
    saveToCookie(); // บันทึกการเปลี่ยนแปลง
}

// จัดการเหตุการณ์เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', (event) => {
    // โหลดรายการจาก cookie ทันทีที่หน้าเว็บเปิด
    loadFromCookie();

    const newBtn = document.getElementById('newBtn');
    newBtn.addEventListener('click', () => {
        // ใช้ prompt() เพื่อรับข้อความจากผู้ใช้
        const newToDo = prompt("Enter a new TO DO:");
        if (newToDo && newToDo.trim() !== "") {
            createToDo(newToDo);
        }
    });
});