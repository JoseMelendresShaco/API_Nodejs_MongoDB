const express = require ("express");
const router = express.Router();

const Tareas = require('../models/task')

router.get('/', async (req, res)=>{
    // res.send("Prueba de rutas");
    const tareass = await Tareas.find();
    console.log(tareass);
    res.json(tareass)
    // res.json({Respuesta:"xd"})
})

router.get('/:id', async (req, res) => {
    const tarea = await Tareas.findById(req.params.id);
    res.json(tarea);
  });
  
router.post('/',async(req,res)=>{
    const {nombre, email, texto,status} = req.body;
    const tarea =  new Tareas({nombre,email,texto,status})
    await tarea.save();
    // console.log(tareaenviada);
    // console.log(req.body);
    res.json({status:"Metodo POST recibido", enviado:tarea});
})

router.put('/:id', async(req, res)=>{
    const {nombre, email, texto, status}=req.body;
    const newTarea = {nombre, email, texto, status};
    await Tareas.findByIdAndUpdate(req.params.id, newTarea);
    console.log(req.params.id);
    res.json("recibido PUT");
})

router.delete('/:id', async (req, res) => {
    await Tareas.findByIdAndRemove(req.params.id);
    res.json({status: 'Persona Eliminada'});
  });

// router.get('/',(req, res)=>{
//     // res.send("Prueba de rutas");
//     tareas.find(function (err, tareass){
//         console.log(tareass);
//     })
//     res.json({
//         ejemplo: "xd"
//     })
// })

module.exports = router;