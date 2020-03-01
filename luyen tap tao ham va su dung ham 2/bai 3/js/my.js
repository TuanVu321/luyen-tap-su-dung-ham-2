function factorial(x) {
    let count = 1;
    if(x<0){
        alert('Khong co ket qua');
    }else {
        if(x==0){
            alert('giai thua la 1');
        }else {
            if(x>0){
                for(let i=1;i<=x;i++){
                    count *= i ;
                }
                alert('giai thua cua so do la: '+count);
            }
        }
    }

}
function display() {
let x = parseInt(prompt('hay nhap vao so can tim giai thua'));
factorial(x);
}