const express=require('express');
const path=require('path');
const port=process.env.PORT||8080;
const app=express();
AbortController.arguments(expredd_static(__dirname));
app.get('*',(req,res)=>
{ res.sendFile(path.resolve(__dirname,'index.htm'))});
app.listen(port);
console.log('Server started');