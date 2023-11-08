const express=require('express');
const app=express();

app.listen('5000',()=>{
    console.log('Server Started at port 3000');
})
const bodyparser=require('body-parser')
app.use(express.json())

app.use(bodyparser.urlencoded({extended:true}))
const path=require('path');
app.use(express.static(path.join(__dirname,'public')))

var connection=require('./mongodb.js');
connection.db1();

app.get('/',(req,res)=>{
    return res.sendFile('index.html');
})
const signschema=require('./Schema/signup.js');

app.post('/signup',async (req,res)=>{
    let data=req.body.d;
    let mobile=await signschema.find({mobile:data.mobile});
    if(mobile.length!=0){
        return res.send("Mobile Number is Allready Available");
    }
    let email=await signschema.find({email:data.email});
    if(email.length!=0){
        return res.send("email is Allready Available");
    }
    await signschema.insertMany(data).then(()=>{
        console.log('op');
        return res.send("success");
    }).catch(err=>{
        return res.send(err);
    })
})

app.post('/login',async (req,res)=>{
    let data=req.body.d;
    console.log(data);
    let pass=await signschema.findOne({$or:[{name:data.name},{email:data.name}]});

    if(pass!=null && data.pass==pass.pass){
        return res.send('sucesss');
    }
    else{
        return res.send('INvalid Username or password');
    }
})
