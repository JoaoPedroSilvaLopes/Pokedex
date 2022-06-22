const gerarCores = (tipo) => {
    const tipos = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", 
    "steel", "fire", "water", "grass", "electric", 'psychic', "ice", "dragon", "dark", "fairy"]

    const coresTipos = ['#A8A878', '#C03028', '#A890F0', '#A040A0', '#E0C068', '#B8A038', '#A8B820', '#705898',
    '#B8B8D0', '#F08030', '#6890F0', '#A1C9A8', '#FAE078', '#F85888', '#98D8D8', '#7038F8', '#705848', '#EE99AC']

    const indice = tipos.indexOf(tipo, 0)

    return tipo === undefined ? 'transparent' : coresTipos[indice]
}

export default gerarCores