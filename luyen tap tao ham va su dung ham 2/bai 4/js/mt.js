let number = prompt('hay nhap vao ky tu');
let arr = number.split(',');
function check() {
            if (parseInt(arr[0]) === arr[0]) {
        alert('true');
    } else {
        alert('false');
    }
}