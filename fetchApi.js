export class Pokemons {
    constructor(root) {
        this.root = document.querySelector(root)
        input = this.root.querySelector('input')
        this.load()
    }

    load() {
        const id = this.input.value
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

        const pokemon = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const { name, id, sprites } = data
        })
    
    }
}

export class pokemonView extends Pokemons {
    constructor(root) {
        super(root)

        this.update()
    }


}