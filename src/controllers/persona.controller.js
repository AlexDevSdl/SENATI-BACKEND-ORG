const Persona = require("../models/persona");

module.exports = {
    async listPersona(req, res) {
        const persona = await Persona.findAll()
        res.json(persona);
    },
    async createPersona(req, res) {
        const { persona, apellidos, dni, fechaNacimiento } = req.body;
        const persona_new = await Persona.create({ persona, apellidos, dni, fechaNacimiento });
        res.status(201).json(persona_new)
    },
    async updatePersona(req, res) {
        const { id } = req.params;
        const { persona, apellidos, dni, fechaNacimiento } = req.body;
        await Persona.update({ persona, apellidos, dni, fechaNacimiento }, { where: { id } });
        res.json({ message: "Persona updated" })
    },
    async destroidPersona(req, res) {
        const { id } = req.params;
        await Persona.destroy({ where: { id } });
        res.json({ message: "Persona delete" })
    },
};