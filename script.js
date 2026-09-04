async function pokeApi() {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await resposta.json();
  return data;
}

async function cardPokemon() {
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend', `<div id="todos">
    <div class="pokemonTodos" id="listaPokemon">
     <div class="pokemon">
        <p class="pokemonidFundo">#001</p>
        <div class="pokemonImagem">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
        </div>
        <div class="pokemonInfo">
        <div class="pokemonNome">
         <p class="pokemonId">#001</p>
        <h2 class="pokemonNome">Bulbasaur</h2>
        </div>
        <div class="pokemonTipo">
        <p class="pokemonTipo">GRASS</p>
        <p class="pokemonTipo">POISON</p>
        </div>
        <div class="pokemonStatus">
        <p class="pokemonStatus">HP: 45</p>
        <p class="pokemonStatus">ATK: 49</p>
        <p class="pokemonStatus">DEF: 49</p>
        <p class="pokemonStatus">SP. ATK: 65</p>
        <p class="pokemonStatus">SP. DEF: 65</p>
        <p class="pokemonStatus">SPD: 45</p>
        </div>
        </div>
    </div>
    </div>
    '
)


