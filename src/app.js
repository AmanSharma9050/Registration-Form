const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("./db/conn.js");
const database = require("./models/schema"); 

const { json } = require("express");

const port = process.env.PORT ||3000 ;    

const static_path=  path.join( __dirname,"../public");
const template_path= path.join( __dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use( express.static(static_path) );
app.set("view engine","hbs");

app.set("views",template_path);



app.get("/",(req,res)=>{
    res.render("frontpage")
})
 
app.post("/register", async(req,res)=>{
    try{
            const {password, cpassword, fullname, username, email} = req.body;
            if (password == cpassword)
            {
            
            const registerEmployee = new database({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword  
            })

            await registerEmployee.validate();
            
            const registered = await registerEmployee.save();
            res.status(201).render("success");
            
            }
            else
            {
                res.send("password are not matching");
            }
         
        }
        catch(error){
        res.status(400).send(error);
    } 
})

app.listen ( port, ()=>{
    console.log(`server is running at port number ${port}.......`)
});