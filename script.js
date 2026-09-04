async function pokeApi() {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await resposta.json();
  console.log(data);
  return data.results;
}
cardPokemon();
async function cardPokemon() {
  const lista = await pokeApi();
  console.log(lista);
    const main = document.querySelector('#listaPokemon');
    lista.forEach(async (pokemon) => {
      const resposta = await fetch(pokemon.url);
      const data = await resposta.json();
      console.log(data,'pokemon');
      main.insertAdjacentHTML('beforeend', `<div id="todos">
   
     <div class="pokemon">
        <p class="pokemonidFundo">#001</p>
        <div class="pokemonImagem">
        <img src="${data.sprites.front_default}" alt="${data.name}">
        </div>
        <div class="pokemonInfo">
        <div class="pokemonNome">
         <p class="pokemonId">${data.id}#001</p>
        <h2 class="pokemonNome">${data.name}</h2>
        </div>
        <div class="pokemonTipo" id="pokemonTipo${data.id}">
        
       
        </div>
        <div class="pokemonStatus${data.id}" 
        <p class="pokemonStatus">HP: 45</p>
        <p class="pokemonStatus">ATK: 49</p>
        <p class="pokemonStatus">DEF: 49</p>
        <p class="pokemonStatus">SP. ATK: 65</p>
        <p class="pokemonStatus">SP. DEF: 65</p>
        <p class="pokemonStatus">SPD: 45</p>
        </div>
        </div>
      </div>
    
     `);
     montarTipos(data);
     pokemonsStatus(data);
    })
    
    };
 
    // ${data.types.map((type) => `<p class="pokemonTipo">${type.type.name.toUpperCase()}</p>`).join('')}
    function montarTipos(pokemon) {
      console.log(pokemon.types);
      const divTipos = document.getElementById(`pokemonTipo${pokemon.id}`);
      pokemon.types.forEach((type) => {
        divTipos.insertAdjacentHTML('beforeend', `<p class="pokemonTipo">${type.type.name.toUpperCase()}</p>`);
      })
    }
    function pokemonsStatus(pokemon) {
      console.log(pokemon.stats);
      const divStatus = document.getElementById(`pokemonStatus${pokemon.id}`);
      pokemon.stats.forEach((stats) => {
        divStatus.insertAdjacentHTML('beforeend', `<p class="pokemonStatus">${stats.stat.name.toUpperCase()}: ${stats.base_stat}</p>`);
      })
    }
   
    
