var port = process.env.PORT || 3000;
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.set("view engine", "ejs");
const faker=require('faker');
const db = require("./modules/db");
const { static } = require('express');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

//////////////////////////////////////////////////////
// var data = [];
// for (var i = 0; i < 500; i++) {
//     data.push([
//         faker.unique(faker.internet.email),
//         faker.date.past()
//     ]);
// }

// var q = 'INSERT INTO users (email, created_at) VALUES ?';
// db.query(q, [data], function (err, result) {
//     if(err) throw err;
//     else console.log(results);
// });

app.get('/' ,(req,res) =>{
var q='SELECT COUNT(*) AS answer FROM users';
db.query(q,function(error,results,fields){
 if(error) throw error;
 var ans=results[0].answer;
 res.render('main',{count:ans});
});
});

app.post('/register',(req,res)=>{

var user={ email: req.body.email};
db.query('INSERT INTO users SET ?',user,function(error,results,fields){
if(error) res.send('Mail already registered!!!!');
res.redirect('/');
});
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
