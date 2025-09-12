// เลือกปุ่มจาก HTML
const changeColorBtn = document.getElementById('changeColorBtn');

// ฟังก์ชันสำหรับสร้างสีสุ่มในรูปแบบ HEX (เช่น #RRGGBB)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เพิ่ม event listener ให้กับปุ่ม
changeColorBtn.addEventListener('click', () => {
    // สร้างสีสุ่ม
    const randomColor = getRandomColor();
    // เปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = randomColor;
});