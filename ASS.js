const express = require('express')
const app = express();
app.use(express.json());

let users = [
    {id :1,name: "A", mobileno: 8983933383, Address:"Ongole" , age:20},
    {id :2,name: "B", mobileno: 8983933383, Address:"Ongole" , age:21}
]

app.get("/users",(req,resp)=>{
    resp.send(users);
})
app.post("/users",(req,res) =>{
    newuser = {
        id : users.length+1,
        name : req.body.name,
        mobileno : req.body.mobile,
        Address : req.body.Address,
        age  : req.body.age
    }

    users.push(newuser);
    response.send(newuser)
});

app.get("/users:/id" , (req,resp)=>{
    const uid = users.find(users.id==req.params.id

})


app.listen(3000,()=> console.log("started,....."))