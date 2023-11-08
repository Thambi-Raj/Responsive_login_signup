const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});
function login(){
    var name=document.getElementById('username').value;
    var password=document.getElementById('passsword');
    
}
function register(){
    var sub=0;
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var mobile=document.getElementById('mobile').value;
    var password=document.getElementById('pas').value;
    var confirm=document.getElementById('confirm-pass').value;
    var dob=document.getElementById('dob').value;
    // for form consists of all details;
    if(name=='' || email=='' || mobile=='' || password=='' || confirm==''){
       document.getElementById('warnmsg').style.display='block';
    }
    else{
    // for username
    if(/\d/.test(name) || /[!@#$%^&*()_+[\]{};':"\\|,.<>?/]/.test(name)){
        sub=-1; 
        console.log('name');
        document.getElementById('field1').style.border='1px solid #F67171'
        document.getElementById('field1').style.boxShadow='10px'
        document.getElementById('uname').style.display='block';
        
    }   
    // for mail
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var o= emailPattern.test(email);
    if(!o && email!=''){ 
        sub=-1;
        console.log(sub+"email");
        document.getElementById('emailwarn').style.display='block';
        document.getElementById('field2').style.border='1px solid #F67171'
        document.getElementById('field2').style.boxShadow='10px'
    }
    // for mobile number
    if(/[!@#$%^&*()_+[\]{};':"\\|,.<>?/a-zA-Z]/.test(mobile) || mobile.length!=10) {
        sub=-1;
        console.log('mobile');
        document.getElementById('mobilewarn').style.display='block';
        document.getElementById('field3').style.border='1px solid #F67171'
        document.getElementById('field3').style.boxShadow='10px'
    }
    // for password
    var pass=document.getElementById('pas').placeholder;
    console.log(pass);
   if (pass=="password") {
        console.log(pass);
    // user click pass
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+[\]{};':"\\|,.<>?/]/.test(password);
    const hasNumber = /\d/.test(password);
    var t= hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber;
    console.log(t);
    if(!t || password.length<8){
       sub=-1;
       console.log('did notmeet');
       document.getElementById('')
       document.getElementById('warnpin').style.display='block';
       document.getElementById('warnpin').innerHTML='Password consists of Uppercase,lowercase,specialCharcters,Numbers';
       document.getElementById('field5').style.border='1px solid #F67171'
       document.getElementById('field5').style.boxShadow='10px'
    } 
    }
    else{
        // for user pin
        if(password.length<6){
            console.log('pin')
            sub=-1;
            document.getElementById('warnpin').style.display='block';
            document.getElementById('warnpin').innerHTML='Pin must grater than equal to 6 numbers';
            document.getElementById('field5').style.border='1px solid #F67171'
            document.getElementById('field5').style.boxShadow='10px'
           
        }   
    }
  // for confirm pass
    if(password!=confirm){
        sub=-1;
        console.log('error in confirm');
        document.getElementById('warnconfirm').style.display='block';
        document.getElementById('field6').style.border='1px solid #F67171'
        document.getElementById('field6').style.boxShadow='10px'
       
    }
    // for all condition are statisfied;
    if(sub==0){
    let data = {};
    data['name']=name;
    data['dob']=dob;
    data['email']=email;
    data['pass']=password;
    data['mobile']=mobile;
    // check wheter this mail user present or not;
    fetch('signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({d:data})
    })
    .then(response => response.text()).then((response)=>{
        if(response=="success"){
            container.classList.remove("sign-up-mode");

            document.getElementById('save').style.backgroundColor='#b6e7ad';
            document.getElementById('save').style.color='black';
            document.getElementById('save').style.marginTop='5%';
            setTimeout(()=>{
                document.getElementById('save').style.display='none';
            
            },5000);
        }
        else{
            document.getElementById('warnmsg').style.display='block';
            document.getElementById('warnmsg').innerHTML=response;   
        }
    });
}
}
}

// for login
function login(){
    var username9=document.getElementById('usern').value;
    console.log(username9);
    var pass=document.getElementById('password1').value;
    
    if(username='' || pass=='' ){
        document.getElementById('loginerr').style.display='block';
    }
    else{
        let data={};
        data['name']=username9;
        data['pass']=pass;
        console.log(data);
        fetch('login',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({d:data})
        }).then(res=>res.text()).then(res=>{
            console.log(res);
            if(res=='sucesss'){
                window.location.href='content.html';
            }
            else{
                console.log('popeopoepw');
                document.getElementById('loginerr').style.display='block';
                document.getElementById('loginerr').innerHTML=res;
            }
        })
    }
}
// checkbox
function pin1(){
    document.getElementById('pas').placeholder='pin';
    document.getElementById('confirm-pass').placeholder='confirm pin';
    document.getElementById('pass').checked=false;
}
function passcheck(){
    document.getElementById('pas').placeholder='password';
    document.getElementById('confirm-pass').placeholder='confirm password';
    document.getElementById('pin').checked=false;
}
