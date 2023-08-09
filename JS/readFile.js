function read(){
    fetch("/Json/plan.json").then(res => res.json()).then(data => {
        let a="";
        for(let i of data){
            a +=
            `<a href="${i.href}">
                <div class="thumb">
                    <img src="${i.img}"/>
                    <p><span class="text">${i.text}</span></p>
                </div>
            </a>`
        }
        let k=document.getElementById('content');
        if(k!==null){
            k.innerHTML+=a;
        }
    })
}
let noiChon = [];
let distance = [];
function readFileBill(){
    let fare;
    fetch("/Json/bill.json").then(res =>res.json()).then(data =>{
        for(let i=0;i<data.length;i++){
            noiChon[i]=data[i].place;
            distance[i]=data[i].length;
        }
    })
}
function charge(){
    let fee = 1000, bayOfTheBay = 20000, securityFee = 10000;
    let amount=document.getElementById('amount');
    let from=document.getElementById('go');
    let to=document.getElementById('back');
    let options = document.getElementsByClassName('opt');//Tra ve mot HTML
    let length;
    for(let i=0;i<noiChon.length;i++){
        if(noiChon[i] === to.value){
            length = distance[i];
            break;
        }
    }
    for(let i=0;i<noiChon.length;i++){
        if(noiChon[i ]=== from.value){
            length = length + distance[i];
        }
    }
    let feeChair;
    for (let i = 0; i < options.length; i++) {
        let select = options[i];//Lay select
        
        // Lấy giá trị của option được chọn
        //select.selectedIndex: thuoc tinh selectedIdex lay chỉ số option duoc chọn
        let selectedValue = select.options[select.selectedIndex].value;
        if(selectedValue==1){
            feeChair=500000;
        }
        else if(selectedValue==2){
            feeChair=300000;
        }
        else{
            feeChair=100000;
        }
    }
        //parseInt: Ep chuoi ve kieu so nguyen
    let amounts=parseInt(amount.value);
    fare = length*fee*amounts + feeChair + bayOfTheBay + securityFee;
    return fare;
}
//Hien thi loi
function showError1(input){
    let p = input.parentElement.parentElement;
    let q=p.querySelector('a');
    q.classList.add('err');
}
function showError2(input){
    input.classList.add('err');
}
//Thanh cong
function showSucces1(input){
    let p = input.parentElement.parentElement;
    let q=p.querySelector('a');
    q.classList.remove('err');
}
function showSucces2(input){
    input.classList.remove('err');
}
//Ham check rong doi voi tu va den
function checkIsEmty(input){
    input.value=input.value.trim();
    if(input.value == ""){
        showError1(input);
        return false;
    }
    showSucces1(input);
    return true;
}
//ham check rong doi voi ngay thang nam
function checkDate(input){
    if(input.value===""){
        showError2(input);
        return false;
    }
    let current = new Date();
    let selectorDatePart =input.value.split('-');//Lay ra mot mag gom ['nam','thang,'ngay']
    if(selectorDatePart[1] + 1 < current.getMonth() +1 || selectorDatePart[2] < current.getDate()|| selectorDatePart[0] < current.getFullYear()){
        showError2(input);
        return false;
    }
    showSucces2(input);
    return true;
}
//Check co phai la so 0 hay khong
function checkNumber(input){
    if(input.value == 0){
        showError2(input);
        return false;
    }
    showSucces2(input);
    return true;
}

function bookTicket(){
    let book=document.querySelector('.menu4 a');
    let a=document.getElementById('go');
    let b=document.getElementById('back');
    let c=document.getElementById('amount');
    let d=document.getElementById('date');//value cua no la mot chuoi ki tu

    book.addEventListener("click",function(){
        let checkIsEmtya = checkIsEmty(a);
        let checkIsEmtyb = checkIsEmty(b);
        let checkDay = checkDate(d);
        let checkZero = checkNumber(c);
        if(checkIsEmtya == true && checkIsEmtyb == true && checkDay == true && checkZero == true)
        {
            let fare=charge();
            console.log(fare);
        }
    })
}

window.onload = ()=>{
    read();
    readFileBill();
    bookTicket();
}
