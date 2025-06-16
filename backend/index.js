const express = require('express');
const cors = require('cors');
const mysql =  require('mysql2');
const app = express();
require('dotenv').config();


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

 db.connect(err =>{
        if(err){
            console.log(err);
            return err;
        } 
        console.log("DB connected.....");  
        res.status(200).send("DB started.....!");
    });

app.post('/api/caruser',(req,res)=>{
    console.log("data ",req.body);
    
    const {id,name,age,mail,phone,vehicleNo,brand,insurance_id} = req.body; 

    const sql = 'INSERT INTO car_users(id,name,age,mail,phone,vehicleNo,brand,insurance_id) VALUES(?,?,?,?,?,?,?,?)';

    db.query(sql,[id,name,age,mail,phone,vehicleNo,brand,insurance_id],(err,result)=>{
        if(err){
            console.error("hey nanba error inserting...",err);
            return res.status(500).send('Server Error')
        }
        res.status(200).send("Inserted successfully!");
    });
})

app.post('/api/user',(req,res)=>{
    console.log(req.body);
    const {id,name,age,mail,phone,insurance_id} = req.body;

    const sql = 'INSERT INTO users(id,name,age,mail,phone,insurance_id) VALUES(?,?,?,?,?,?)';

    db.query(sql,[id,name,age,mail,phone,insurance_id],(err,response)=>{
        if(err){
            console.error("Hey error da.. enna nu paru..",err);
            return res.status(500).send("Server Error");
        }
        res.status(200).send("Inserted successfully!")
        res.status(200).send("DB started.....!");
    })
})

app.get('/api/all-insurance',(req,res)=>{
    const sql = `select insurance_id,name,age,mail,phone,vehicleNo as extra1, brand as extra2 from car_users
    UNION 
    select insurance_id,name,age,mail,phone, '' As extra1, '' As extra2 from users`;

    db.query(sql,(err,result)=>{
        if(err){
            console.error("Error fetching insurances: ",err);
            return res.status(500).send("Server Error")
        }

        res.json(result);
    });
});

app.listen(5000,()=>{
    console.log("Server running buddy!");
})

