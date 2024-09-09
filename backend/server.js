import express from 'express';
import cors from 'cors';

const server = express()
const port = 3001

server.use(express.json());
server.use(cors());

server.get('/cards', (req, res) => {
  
    let cards= [

        {
    "titulo": 'Componentes',
    "lista": `
    - Objetos e Lista de Objetos
    - Componentes`,
    "data": '26/agosto', 
    "tensdata": false,
    "status" : "Completo"  
        },
        
        {
    "titulo": 'Renderização e Efeito',
    "lista":   `
    - Componentes na renderização.`,
    "data": '2/setembro',
    "tensdata": false,
    "status" : "Em andamento"  
    },
    
        {
    "titulo": 'Consumindo APIs - Parte 1',
    "lista":   `
    - Componentes na renderização.`,
    "data": '9/setembro',
    "tensdata": true,
    "status" : "Criado"  
        },
    
        {
    "titulo": 'Prova Prática e Teórica',
    "lista":   `
    - Criando um projeto React
    - Estilização com SCSS
    - Navegação entre telas
    - Variáveis de estado
    - Renderização de lista
    - Componentes`,
    "data": '16/setembro',
    "tensdata": true,
    "status" : "Evento"  
        },
    
        {
    "titulo": '',
    "lista":   `Fim do terceiro Bimestre
    
    ` }]

    res.status(200).send(cards)
});

server.listen(port, () => console.log(`Executando na porta ${port}`))