const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require('cors');
const app = express();
const {mongoose}=require("./database")

//ajustes
app.set("port",process.env.PORT || 2000);
//middleware
app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

//rutas
app.use("/api/personas",require("./routes/task.routes"));
//Static files
app.use(express.static(path.join(__dirname,'public')));
// console.log(path.join(__dirname,'public'));

app.listen(app.get("port"), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
});