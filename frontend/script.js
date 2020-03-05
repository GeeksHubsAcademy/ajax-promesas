// const getQuote = ()=>{//ES6 2015
//    const respuesta = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes'); //para hacer peticiones AJAX
//     respuesta
//     .then(res=> res.json())//parsea a JSON la respuesta
//     .then(citas=>{// metemos la respuesta en el html
//         document.querySelector('.quote').innerHTML=`<div>
//         <h1>${citas[0].author}</h1>
//         <blockquote>${citas[0].quote}</blockquote>
//         </div>`
//     })
//     .catch(error=>console.error(error))
// }
const getQuote = async () => {
    try {//ES8 2017
        const res = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes'); //para hacer peticiones AJAX
        const citas = await res.json(); //parsea a JSON la respuesta
        // metemos la respuesta en el html
        document.querySelector('.quote').innerHTML = `<div>
             <h1>${citas[0].author}</h1>
             <blockquote>${citas[0].quote}</blockquote>
             </div>`;    
    } catch (error) {
        console.error(error)
    }
}
let page = 0;
const getCharacters = () => {
    page++; //va a la siguiente página
    fetch('https://rickandmortyapi.com/api/character/?page=' + page)
        .then(res => res.json())
        .then(res => {
            const characters = res.results;
            document.querySelector('.characters').innerHTML = '';
            for (const character of characters) {
                document.querySelector('.characters').innerHTML += `
        <div class="character">
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="avatar">
        </div>
        `
            }
        })
        .catch(error => console.error(error))
}
const getPokemon = () => {
    fetch('http://localhost:3000/pokemon')
        .then(res => res.json())
        .then(pokemons => {
            document.querySelector('.pokemons').innerHTML = '';
            for (const pokemon of pokemons) {
                const tipo2 = pokemon.type[1] ? pokemon.type[1] : ''
                const tipos = pokemon.type[0] + '-' + tipo2
                document.querySelector('.pokemons').innerHTML += `
        <div class="pokemon">
            <h3>${pokemon.name}</h3>
            <div class="type">${tipos}</div>
            <img src="${pokemon.ThumbnailImage}" alt="">
        </div>
            `
            }
        })
        .catch(error => console.error(error))
}