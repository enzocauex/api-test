const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    fecthApi()
})

const pokemon = document.querySelector('input')

function fecthApi() {
    const id = pokemon.value
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    fetch(url)
    .then((respose) => respose.json())
    .then((data) => {
        const { name, id } = data
        console.log(name, id)
    })
}
