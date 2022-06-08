// // /* 
// // Classe para dados genéricos e imutáveis das espécies 
// // dos pokémons como: numero da pokedex, tipo, sprites e 
// // descrição da pokedex.

// // # Gerar relação de vantagem e desvantagem:
// // - Resistencia
// // - Fraqueza
// // - Imunidade
// // - Dano normal
// // */

// import { sprite } from '../../../pictures/pokemonSprites/'

import axios from "axios";
import dadosAuxiliares from '../dadosAuxiliares/'

import gerarFraquezas from '../../controlFuncions/GerarFraquezas'
import gerarSimbolos from '../../controlFuncions/GerarSimbolos'

class DadosPokedex {
	constructor(numeroPokedex, especie, statsBase, tipo, evolucao, descricao) {
	 	this.numeroPokedex = numeroPokedex
		this.sprites = [`../../../pictures/pokemonSprites/${this.numeroPokedex}.png`, `../../../pictures/pokemonSprites/${this.numeroPokedex}S.png`]
		this.tipo = tipo
	 	this.especie = especie
		this.descricao = descricao
		this.statsBase = statsBase
		this.evolucao = evolucao
		this.simbolos = gerarSimbolos(tipo)
		this.fraquezas = gerarFraquezas(tipo)
	}
}

const pokedex = []

async function coletarDados() {
	for (let index = 1; index <= 151; index++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${index}/`
		try {
			const poke = await axios.get(url)
			
			const numeroPokedex = ('000' + poke.data.id).slice(-3)
			const especie = poke.data.name[0].toUpperCase() + poke.data.name.substring(1)

			const stats = [poke.data.stats[0].base_stat, poke.data.stats[1].base_stat, poke.data.stats[2].base_stat, 
			poke.data.stats[3].base_stat, poke.data.stats[4].base_stat, poke.data.stats[5].base_stat]

			let tipos

			poke.data.types[1] === undefined ? tipos = [poke.data.types[0].type.name] : tipos = [poke.data.types[0].type.name, poke.data.types[1].type.name]

			pokedex[index] = new DadosPokedex(numeroPokedex, especie, stats, tipos, dadosAuxiliares[index][0], dadosAuxiliares[index][1])
		}
		catch(e) {
			console.log(e)
		}
	}
}

coletarDados()

export default pokedex