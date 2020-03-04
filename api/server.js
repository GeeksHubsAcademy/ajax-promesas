const express =require('express');
const axios =require('axios');
const app =express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/pokemon',(req,res)=>{
    
    axios.get('https://www.pokemon.com/es/api/pokedex/kalos')
    .then(response=>{
        console.log(response.data[0])
        res.send(response.data)
    });
});

app.listen(3000,()=>console.log('servidor levantado'))