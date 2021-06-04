const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//rutas
const rutasPersona = require("./routes/personasRutas");

app.use(express.urlencoded());

app.use("/persona", rutasPersona)

app.get('/', (req, res)=>{
    res.json({
        mensaje: "bienvenido"
    })
})

app.listen(port, ()=>{
    console.log(`server escuchando en puerto: ${port}`)
})