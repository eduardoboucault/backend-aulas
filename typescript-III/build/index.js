"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando.");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/pets', (req, res) => {
    res.status(200).send(database_1.pets);
});
app.get('/pets/search', (req, res) => {
    const q = req.query.q;
    const result = database_1.pets.filter((pet) => pet.name.toLowerCase().includes(q.toLowerCase()));
    res.status(200).send(result);
});
//# sourceMappingURL=index.js.map