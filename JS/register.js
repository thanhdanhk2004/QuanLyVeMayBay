window.onload=function(){
    let username = document.querySelector('#username');
    let phonenumber = document.querySelector('#phone-number');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirm = document.querySelector('#confirm-passwod');
    let form = document.querySelector('form');

    //Ham hien thi loi
    function showError(input, masseage){
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        parent.classList.add('error');
        small.innerHTML=masseage;
    }

    //Ham hien thi thanh cong
    function showSucess(input){
        let parent = input.parentElement;
        let small=parent.querySelector('small');
        parent.classList.remove('error');
        small.innerHTML='';
    }

    //Ham check rong.
    function checkIsEmty(listInput){
        let a = false;
        for(let i of listInput){
            i.value=i.value.trim();
            if(i.value == ""){
                showError(i, '!Khong duoc de trong');
                a=true;
            }
            else{
                showSucess(i);
            }
        }
        return a;
    }
    function checkLength(input, min, max){
        let b=false;
        input.value = input.value.trim();
        if(input.value.length < min){
            showError(input,`Phai co it nhat ${min} ki tu`);
            b=true;
        }
        else if(input.value.length > max){
            showError(input,`Toi da ${max} ki tu`);
            b=true;
        }
        else{
            showSucess(input);
        }
        return b;
    }
    function checkConfirmPassword(input1, input2){
        let c=false;
        if(input1.value !== input2.value){
            showError(input2,'Mat khau khong trung khop');
            c=true;
        }
        else{
            showSucess(input2);
        }
        return c;
    }
    //Bat su kien dang ky
    form.addEventListener('submit',function(e){
        e.preventDefault();//click se khong bi load trang
        let isEmtyError = checkIsEmty([username,email,phonenumber,password,confirm]);
        let checkLengthUser,checkLengthPassword,checkConfirm;
        if(username.value !== ""){
           checkLengthUser = checkLength(username,3,30);
        }
        if(password.value!==""){
            checkLengthPassword = checkLength(password,4,30);
        }
        if(password.value!=="" && confirm.value!==""){
            checkConfirm = checkConfirmPassword(password,confirm);
        }
        if(isEmtyError==true || checkLengthUser == true || checkLengthPassword == true || checkConfirm == true){
            //khong lam gi
        }
        else{
            alert("DANG KY THANH CONG.");
        }
    });
}