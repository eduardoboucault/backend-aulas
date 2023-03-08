import express, { Request, Response } from 'express';
import cors from 'cors';
import { pets } from './database';
import { Tpet, PET_SIZE } from './types/types';

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando.");
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
});

app.get('/pets', (req: Request, res: Response) => {
    res.status(200).send(pets)
})

app.get('/pets/search', (req: Request, res: Response) => {
    const q = req.query.q as string // forçamos a tipagem aqui*

    const result: Tpet[] = pets.filter(
        (pet) => pet.name.toLowerCase().includes(q.toLowerCase())
    )

    res.status(200).send(result)
});

app.post('/pets', (req: Request, res: Response) => {
    const id = req.body.id as string;
    const name = req.body.name as string;
    const age = req.body.age as number;
    const size = req.body.size as PET_SIZE;

    const newPet: Tpet = {
        id,
        name,
        age,
        size
    };

    pets.push(newPet);

    res.status(201).send('Doguinho cadastrado com sucesso! :D');
});