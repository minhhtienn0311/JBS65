// bai 1
let x = prompt("Nhap 1 so:")

// function kiemTraSo(num) {
//     //ngoai le - khong phai so
//     if (!Number.isFinite(num)) return num + "khong phai so";
//     // doi kieu du lieu
//     num = parseFloat(num);
//     //kiem tra
//     if(num < 0) {
//         return num + "la so am";
//     } else if (num == 0) {
//         return num + "la 0";
//     } else {}
//         if (num % 1 == 0) return num + "so nguyen duong";
//         // if (Number.isInteger(x)) return num + "so nguyen duong";
//         else if (num + "la so thap phan duong")


console.log(kiemTraSo(x));

// bai 2
let y = 1;
let z = 2;
let k = 3;

// arrow func
const max = (...a) => {
    let maxNum = 0;
    // ..
    a.forEach(element => {
        if (maxNum < element){
            maxNum = element;
        }
    });
    return maxNum;
}

function max2(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c){
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}