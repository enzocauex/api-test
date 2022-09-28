const id = 25

function fecthApi() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.sprites.other.dream_world.front_default)
        const img = document.querySelector('img')
        img.setAttribute('scr', data.sprites.other.dream_world.front_default)
    })
}