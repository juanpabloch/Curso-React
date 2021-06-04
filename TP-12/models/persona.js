const qy = require("../db");

module.exports = {
    guardarUnaPersona: async (persona)=>{
        const query = "INSERT INTO persona(nombre, apellido, nickname, edad, email) VALUES(?, ?, ?, ?, ?)";
        const result = await qy(query, [persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email])        
        
        return result.insertId;
    },

    traerUnaPersona: async (id)=>{
        const query = "SELECT * FROM persona WHERE id = ?";
        const result = await qy(query, [id])        
        
        return result[0];
    },

    traerTodasLasPersonas: async ()=>{
        const query = "SELECT * FROM persona";
        const listadoPersonas = await qy(query)

        return listadoPersonas;
    },

    modificarPersona: async (id, edad, email)=>{
        const query = "UPDATE persona SET edad = ?, email = ? WHERE id = ?";
        const result = await qy(query, [edad, email, id]);

        return result.affectedRows;
    },

    borrarPersona: async (id)=>{
        const query = "DELETE FROM persona WHERE id = ?";
        const result = await qy(query, [id]);

        return result.affectedRows;
    }

}