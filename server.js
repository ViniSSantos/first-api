const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients", function (req, res) {
    res.json(data);
});

app.get("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = data.find(client => client.id == id)

    if (!client) return res.status(204).json();

    res.json(client);
});

app.post("/clients", function (req, res) {
    const { name, email } = req.body;

    //salvar

    res.json({ name, email });
});

app.put("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = data.find(client => client.id == id)

    if (!client) return res.status(204).json();

    const { name, email } = req.body;

    client.name = name;
    client.email = email;

    res.json(client);
});

app.delete("/clients/:id", function (req, res) {
    const { id } = req.params;
    const clientsFiltared = data.filter(client => client.id != id);

    res.json(clientsFiltared);
});


app.listen(3000, function () {
    console.log("Server is running");
});
