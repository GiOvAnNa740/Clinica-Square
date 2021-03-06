const mongoose = require("mongoose");

const medicoSchema = mongoose.Schema({
  nome: { type: String, required: true },
  sexo: { type: String, required: true },
  dtnasc: { type: String, required: true },
  email: { type: String, required: true },
  fone: { type: String, required: true },
  cpf: { type: String, required: true },
  espec: { type: String, required: true },
  crm: { type: String, required: true },
  senha: { type: String, required: true },
  senhaconf: { type: String, required: true },
});

module.exports = mongoose.model("Medico", medicoSchema);
