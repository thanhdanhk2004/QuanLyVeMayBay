// ======== Xử lý tăng giảm số lượng hành khách ========
let amountElement = document.getElementById('amount');
let amount = amountElement.value;
// Xu ly handle plus
let render = (amount) => {
    amountElement.value=amount;
}
let handlePlus = () => {
    amount++;
    render(amount);
}

// Xu ly handleMinus
let handelMinus = () => {
    if(amount > 1){
        amount--;
    }
    render(amount);// Cap nhat gia tri cho amount
}
//Bat su kien khi nguoi dung nhap
amountElement.addEventListener('input',function(){
    amount=amountElement.value;
    amount=parseInt(amount) //Chuyen dang amout ve so nguyen.
    amount = (isNaN(amount)|| amount > 10)?0:amount;
    render(amount);
})

// ==== Xu ly hien thi khi nhấn button từ và đến =====
//From
let k = document.querySelector('.v-menu');
let b = document.querySelector('.from a')
let c = document.querySelector('.lick');
//To
let d = document.querySelector('.v-menu2');
let e = document.querySelector('.to a')
let f = document.querySelector('.lick2');
b.addEventListener('click', function(){
    k.style.display = 'block';
    d.style.display='none';
});
c.addEventListener('click', function (e) {
    e.preventDefault();
    k.style.display = 'none';
});

e.addEventListener('click', function(){
    d.style.display = 'block';
    k.style.display='none';
});
f.addEventListener('click', function (h) {
    h.preventDefault();
    d.style.display = 'none';
});

// ========== Xử lý việc hoán đổi =========

let go=document.getElementById('go');
let back=document.getElementById('back');
let convert=document.querySelector('.convert a');
let demo1=document.getElementById('demo1');
let demo2=document.getElementById('demo2');
//In ra du lieu
function takeValue(input,demo){
    demo.innerHTML=input.value;
}
//Hoan doi du lieu
function convertData(input1, input2){
    let stemp=input1.value;
    input1.value=input2.value;
    input2.value=stemp;
}
//Nghe su kien enter va dong
go.addEventListener('keydown',function(e){
    if(e.key=== 'Enter'){
        takeValue(go,demo1);
        k.style.display = 'none';
    }
});
back.addEventListener('keydown',function(e){
    if(e.key=== 'Enter'){
        takeValue(back,demo2);
        d.style.display = 'none';
    }
});
convert.addEventListener('click',function(e){
    e.preventDefault();
    convertData(go,back);
    takeValue(go,demo1);
    takeValue(back,demo2);
});


// === Xu ly the a ====
$(document).ready(()=>{
    $(".content > div:not(:first-child)").hide();
    $(".menu3 a").click(function(){
        $(".menu3 li").removeClass('color');
        $(this).parent().addClass('color');
        let a=$(this).attr('href');
        console.log(a);
        $('.content > div').hide();
        $(a).show();
})
})

//========= XU LY HOA DON TINH TIEN ==========
