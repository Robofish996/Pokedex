function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");

    let type = document.getElementById("type");

    let region = document.getElementById("region");


    // Will only give objects
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding

    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    // Can log them since they are now pure Strings
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding


    /*-----------------------------------------------
     * Add your solution code here
     *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

    // Use If to ensure input validation (ensure input fields are !empty)

    if (name === "" || type === "" || region === "") {
        alert("All fields must be entered");
        return false;
    }

    // Create pokemon object here (const pokemon) using user input Strings

    const pokemon = {
        name: name,
        type: type,
        region: region,
    };
    console.log(pokemon);

    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

    const pokemonData = document.createElement("span");
    pokemonData.innerHTML = `Name: ${pokemon.name} Type: ${pokemon.type} Region: ${pokemon.region}`;
    document.body.appendChild(pokemonData);

    /* --- Part 2 : Creating other DOM Objects --- */

    // Create HTML li element here (const pokedexEntry)

    const pokedexEntry = document.createElement("li");


    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object

    pokedexEntry.className = pokemon.type;



    // Creating a preview button (using a Template Literal)

    const previewButton = `
    <form action="http://google.com/search" target="_blank">
        <input name="q" hidden value="${pokemon.name}">
        <input type="submit">
    </form>
`;
    pokedexEntry.innerHTML = previewButton;
    const pokedexEntries = document.getElementById("pokedex-entries");
    pokedexEntries.appendChild(pokedexEntry);
    

    // this code is for an html form that will Google search the name of the pokemon







































}