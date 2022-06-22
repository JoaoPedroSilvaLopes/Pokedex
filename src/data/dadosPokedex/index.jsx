// // /* 
// // Classe para dados genéricos e imutáveis das espécies 
// // dos pokémons como: numero da pokedex, tipo, sprites e 
// // descrição da pokedex.

// // # Gerar relação de vantagem e desvantagem:
// // - Resistencia
// // - Fraqueza
// // - Imunidade
// // - Dano normal

import gerarFraquezas from '../../controlFuncions/GerarFraquezas'
import gerarSimbolos from '../../controlFuncions/GerarSimbolos'

class DadosPokedex {
	constructor(numeroPokedex, sprites, especie, statsBase, tipo, evolucao, descricao) {
	 	this.numeroPokedex = numeroPokedex
		this.sprites = sprites
		this.tipo = tipo
	 	this.especie = especie
		this.descricao = descricao
		this.statsBase = statsBase
		this.evolucao = evolucao
		this.simbolos = gerarSimbolos(tipo)
		this.fraquezas = gerarFraquezas(tipo)
	}
}

export default DadosPokedex