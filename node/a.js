const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const mysql=require('mysql');
app.use(bodyparser.urlencoded({}));
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'item',
	port:'3306'
})
app.post('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if(err) throw err;

		con.query(`SELECT * FROM moban WHERE status=${req.body.status}`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			
		})
		con.release()
	})
})
app.post('/del',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`DELETE FROM moban WHERE id=${req.body.id}`,(err)=>{
			if(err) throw err;
		})
		con.release()
	})
})
app.post('/add',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`INSERT INTO moban (name,sex,status) VALUES ('${req.body.name}','${req.body.sex}','${req.body.status}')`,(err)=>{
			if(err) throw err;
		})
		con.release()
	})
})
app.listen(3000,()=>{
	console.log('成功 ')
})