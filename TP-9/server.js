const express = require('express');
const app = express();

const exito = require('./public/funciones').exito;
const validar = require('./public/funciones').validar;

const port = process.env.PORT || 8080

app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public`))

app.post("/", (req, res)=>{
    const info = req.body;
    const error = validar(info);
    if(error){
        res.send(error);
    }else{
        res.app.set('info', req.body);
        res.redirect('/exito');
    }
})

app.get("/exito", (req, res)=>{
    let info = res.app.get('info');
    res.send(exito(info));
})

app.get('*', (req, res)=>{
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})