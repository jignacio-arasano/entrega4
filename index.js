document.getElementById("pokemon-button").addEventListener("click", function() {
    var pokemonNumber = document.getElementById("pokemon-number").value;
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber;
    fetch(apiUrl)
        .then(response => response.json())
        .then (data => {
            renderPokemonCard(data);
            console.log(data);
        })
        .catch(error => renderErrorMessage());
    });
   


function renderPokemonCard(pokemonData) {
    var pokemonCard = document.getElementById("pokemon-card");
    pokemonCard.innerHTML = `
      <div>
        <h2>${pokemonData.name}</h2>
        <p>Tipo: ${pokemonData.types[0].type.name}</p>
        <p>Altura: ${(pokemonData.height / 10).toFixed(2)} metros</p>
        <p>Peso: ${(pokemonData.weight / 10).toFixed(2)} kilogramos</p>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
      </div>
    `;
  }
function renderErrorMessage() {
    var pokemonCard = document.getElementById("pokemon-card");
    pokemonCard.innerHTML = `
        <div>
            <p>No se encontró ningún Pokémon con ese número.</p>
        </div>
        `;
    }

    
      