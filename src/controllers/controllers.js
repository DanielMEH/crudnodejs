const connectMysql = require("../db/database")
const lib = require("../lib/lib")
controllers= {};
const timeago = require("timeago.js");


controllers.list= (req,res)=>{

    connectMysql.query("SELECT * FROM dotask ORDER BY id DESC",(err, rows, fields)=>{
        if (err) {
            console.log(err)
            return;
            
        }
        
        res.render("../views/index", { data: rows, timeago });
        lib.index(req,res)
        
    })
}
controllers.views = (req, res) => {
  res.render("../views/index");
}; 

controllers.save = (req,res) => {
    const  id  = req.body
    if (!id.taskname) {
      res.send("Los datos no pueden estar vacios");
    } else {
     if (!id.taskdescription) {
    res.send("Los datos no pueden estar vacios");

     } else {
       connectMysql.query("INSERT INTO dotask SET ?", [id], (err, rows) => {
         if (!err) {
           console.log(rows);
         }
         res.redirect("/");
       });
     }
    }
    
}
controllers.edit= (req,res)=>{

    const {id} = req.params;
    connectMysql.query("SELECT * FROM dotask WHERE id = ?",[id],(err,rows)=>{
        if(err){
            console.log(err)
        }
        res.render("../views/edit",{data:rows[0]})
    })
}

controllers.update= (req,res)=>{

    const actualizar = req.body;
    const {id} = req.params;
    
    connectMysql.query("UPDATE dotask SET ? WHERE id = ?",[actualizar,id],(err, rows)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
}
controllers.delete = (req,res)=>{
   const { id } = req.params;
   connectMysql.query('DELETE FROM dotask WHERE id = ?',[id],(err, rows)=>{
       if(err){
           console.log(err)
       }else{
           res.redirect('/')
       }
   })
}

module.exports=controllers;