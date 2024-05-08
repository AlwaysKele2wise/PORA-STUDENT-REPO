const express = require("express");
require("dotenv").config();


const app = express()

//secret key
//console.log(process.env.Divine_key)


//listening to the port
const port = process.env.PORT

app.use(express.urlencoded({extended: true}));
app.use(express.json({}));


//routing
app.get("/student/age", ( req, res, next) => {
    const studentDetails ={
            name: "Divine",
            age: 7,
            clas: 2014,
            address: "Aba, Ukaegbu"
        }
        
        res.send(studentDetails)
    });
    
    app.post("/register", ( req, res, next) => {
      
       const { email, password, full_name } = req.body;
    
       const body = {
        email, 
        password,
        full_name 
       };
    
       //console.log(body);
    
       res.send({
        body,
       msg:"user successfully registered"
      });
    
    });
    
    app.put("/update", ( req, res, next) => {
      
        
    const {full_name, age, address } = req.body;
    
    const user_details = {
            email:"divine@gmail.com",
            password: "234857463893",
            full_name: full_name,
            age: age,
            address: address
           }
     
           res.send({
            user_details,
            msg: "update successful",
       });
    });
     
    app.patch("/update", ( req, res, next) => {
      
       const {password, full_name} = req.body;
       
          const user_details = {
            password: "7030385813",
            full_name: "Adidi aka De Greater"
        }
         
               res.send({
                user_details,
                msg: "saved successful",
           });
    });
    
    app.delete("/delete", ( req, res, next) => {
      
        const user = { email, password, full_name, age } = req.body;
     
        const user_details = {
         email, 
         password,
         full_name,
         age 
        };
     
        
        // console.log(body);
     
        res.send({
         user_details,
        msg:"Delete succesfully"
       });
     
     });

   
app.listen(port, () => {
   console.log("server is listening on:" + port)
})




















// // function dev() {
// // console.log("dev")
// // }

// // dev()

// /*const dev = (par1,par2) => {
// console.log({sum:par1+par2})
// console.log("Kelechi ukpai")
// }

// dev(2, 3)*/

// function toCelsius(f) {
//     return (f - 32) * 5 / 9
// }

// function toFahrenheit(c) {
//     return (c * 9) / 5 + 32
// }
// function Weight(Pounds){
//     return 7 * 2.2
// }
// function distance () {
//     return 7 * 0.62137
// }

// console.log(toCelsius(77))
// console.log(toFahrenheit(100))
// console.log(Weight(1000))
// console.log(distance())

