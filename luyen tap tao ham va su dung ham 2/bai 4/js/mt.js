// let text = prompt('hay nhap vao ky tu');
// let arr = text.split(' ');
let arr = [a];

function checkNumber() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
   }
