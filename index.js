const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require("./db/db");
const Cliente = require("./model/clienteModel");
const clienteController = require("./controller/clienteController");

try {
 database.sync().then(() => {
 })
}
catch(erro) {
 console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro)
};
app.get("/",(req, res) =>{

 return res.json({message: "Olá Mundo!"});
})
app.post("/Cadastrar",clienteController.ClienteCreate);
app.get("/Clientes",clienteController.ClienteListar);
app.put("/Clientes/:id",clienteController.ClienteUpdate);
app.delete("/Clientes/:id",clienteController.ClienteDelete);

app.listen(3000);


