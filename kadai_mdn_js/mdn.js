// const today = new Date();
// console.log(today.toDateString());
const today = new Date();

const year = today.getFullYear();            // 例: 2025
const month = today.getMonth() + 1;          // 0～11 → 1～12 に調整
const day = today.getDate();                 // 1～31

const formatted = `${year}年${month}月${day}日`;

console.log(formatted);
