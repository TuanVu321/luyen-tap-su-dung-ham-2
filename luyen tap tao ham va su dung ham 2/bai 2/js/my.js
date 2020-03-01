function area(r) {
let s=3.14*r*r;
alert('dien tich hinh tron la: '+s);
}
function display1() {
let r = parseInt(prompt('Nhap ban kinh hinh tron'));
areaSquare(r)
}
function circum(r) {
    let c = 2*r*3.14;
    alert('Chu vi hinh tron la: '+c);

}
function display2() {
    let r = parseInt(prompt('Nhap ban kinh hinh tron'));
    circum(r);
}