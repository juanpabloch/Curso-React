const personaService = require("../services/personaService")

module.exports = {
    guardarUnaPersona: async (req, res)=>{
        try {
            if(!req.body.nombre || !req.body.nickname || !req.body.edad || !req.body.email ) throw new Error("error en los parametros requeridos");
    
            const persona = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nickname: req.body.nickname,
                edad: req.body.edad,
                email: req.body.email
            }
    
            const personaNueva = await personaService.guardarUnaPersona(persona);
    
            res.send("la persona se creo satisfactoriamente, su id asignado es " + personaNueva.id);
    
        } catch (err) {
            console.log("se produjo el siguiente error: " + err);
        }
    },

    listarPersonas: async (req, res)=>{
        const listado = await personaService.listarPersonas();
        res.status(200).json(listado);
    },


    traerUnaPersona: async (req, res)=>{
        try {
            const id = req.params.id;
            const persona = await personaService.traerUnaPersona(id);
            res.status(200).json(persona);

        } catch (err) {
            res.status(413).json({error: err.message})
        }
    },

    modificarPersona: async (req, res)=>{
        try {
            const id = req.params.id
            if(!Number(id))throw new Error("id invalido");

            const resultado = await personaService.modificarPersona(id, req.body.mail, req.body.edad);
            
            if(!resultado.error){
                const persona = await personaService.traerUnaPersona(id);
                return res.status(200).json(persona);
            }else{
                throw new Error(resultado.error)
            }
    
            
        } catch (err) {
            res.status(413).json({
                error: err.message
            })
        }
    },

    eliminarPersona: async (req, res)=>{
        try {
            const id = req.params.id;
            if(!Number(id))throw new Error("id invalido");
            
            const resultado = await personaService.borrarPersona(id);

            if(resultado){
                res.status(200).json({
                    mensaje: "eliminado correctamente"
                })
            }else{
                res.status(413).json({
                    mensaje: "persona no existe"
                })
            }

        } catch (err) {
            res.status(413).json({
                error: err.message
            });
        }
    }

}