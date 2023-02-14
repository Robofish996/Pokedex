function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;


    /*-----------------------------------------------
     * Add your solution code here
     *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */
    // Use If to ensure input validation (ensure input fields are !empty)

    if (name === "" || type === "" || region === "") {
        alert("Please make sure all fields are populated!")
        return false;
    }


    // Create pokemon object here (const pokemon) using user input Strings

    const pokemon = {
        name: name,
        type: type,
        region: region,
    }


    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

    const pokemonData = document.createElement("span");
    pokemonData.innerHTML = `Name: ${pokemon.name} Type: ${pokemon.type} Region:${pokemon.region}`;

    /* --- Part 2 : Creating other DOM Objects --- */

    // Create HTML li element here (const pokedexEntry)

    const pokedexEntry = document.createElement("li");



    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
    pokedexEntry.className = pokemon.type;

    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit" value="Preview">
            </form>
        `


    /* --- Part 3 : Add things into the DOM --- */

    // Firstly append pokemonData to the innerHTML of pokedexEntry

    pokedexEntry.innerHTML += pokemonData.outerHTML;

    // Secondly append the previewButton to innerHTML of pokedexEntry
    pokedexEntry.innerHTML += previewButton;

    // Lastly we will get the ul List element that is meant to contain all pokedex entries
    const pokedexEntries = document.getElementById("pokedex-entries");
    
    // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element
    pokedexEntries.appendChild(pokedexEntry);

    // Add pokemon object to pokedexMemory array
    const pokedexMemory = [];
    pokedexMemory.push(pokemon);

    // Log the pokedexMemory array to the console
    console.log(pokedexMemory);

    /*-----------------------------------------------
     * Solution must be above this comment
     *---------------------------------------------*/
}
