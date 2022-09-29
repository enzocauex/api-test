const pokemon = document.querySelector('input')


function fecthApi() {
    let id = Number(pokemon.value)
    
    console.log(id)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        const { name, id } = data
        console.log(name, id)
    })
}

const a = [1, 3, 4, 5]

a.map((item) => {
    console.log(item)
})