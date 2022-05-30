export function gerarStringTipo(tipo) {
    if (tipo === undefined) {
        return ''
    }

    return tipo.toUpperCase()
}