export function gerarSimbolos(tipo) {
    if (tipo === undefined) {
        return undefined
    }

    const vetorTipos = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", 
    "steel", "fire", "water", "grass", "electric", 'psychic', "ice", "dragon", "dark", "fairy"];

    const indexTipo = vetorTipos.findIndex(function(vetorTipos) {return vetorTipos === tipo})
    const index = ('000' + (indexTipo + 1)).slice(-3)

    return `../../../pictures/typeSymbols/${index}T.png`
}