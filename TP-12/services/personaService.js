const personaModel = require("../models/persona");

module.exports = {
    guardarUnaPersona: async (persona)=>{
        const id = await personaModel.guardarUnaPersona(persona);
        persona.id = id;

        return persona;
    },

    listarPersonas: async ()=>{
        const listaDePersonas = await personaModel.traerTodasLasPersonas();
        return listaDePersonas;
    },

    traerUnaPersona: async (id)=>{
        if(!Number(id)){
            return {
                error: "id invalido"
            }
        };

        const persona = await personaModel.traerUnaPersona(id);

        if(persona === undefined){
            return {
                error: "persona no encontrada"
            }
        }
        return persona
    },

    modificarPersona: async (id, mail, edad)=>{
        try {
            if(!mail || !edad){
                throw new Error("datos incompletos");
            }

            const resultado = await personaModel.modificarPersona(id, edad, mail);
            
            if(resultado !== 1)throw new Error("persona no existe");

            return resultado

        } catch (err) {
            return {
                error: err.message
            }
        }
    },

    borrarPersona: async (id)=>{
        const resultado = await personaModel.borrarPersona(id);

        if(resultado == 1){
            return true
        }else{
            return false
        };
    }
}