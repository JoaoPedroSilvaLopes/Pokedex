import './home-page.css';

import axios from "axios";
import { useEffect, useState } from 'react';

import { Image } from '../components/BasicComponents/Image';

const HomePage = () => {
  const [escolha, setEscolha] = useState(0)
  const [bgColor, setBgColor] = useState('#FFFFFF')
  const [text, setText] = useState('Olá, você chegou a tempo de escolher seu primeiro Pokémon! Aperte em uma das pokebolas para escolher...')
  const [sprite, setSprite] = useState('')

  useEffect(() => {
    async function buscarPokemon() {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${escolha}/`)

      const sprites = 
      [poke.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default, 
      poke.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny]

      console.log(sprites)
      
      let randomizador = Math.random() * 10
      randomizador > 5 ? setSprite(sprites[0]) : setSprite(sprites[1])
    }
    buscarPokemon()
  }, [escolha])

  const handleEscolha = (numeroPokemon, backgroundColor) => {
    setEscolha(numeroPokemon)
    setBgColor(backgroundColor)
    setText("Deseja escolher esse pokémon? (Y/N)")

    document.addEventListener("keydown", handleConfirmar)
  }

  const handleConfirmar = (e) => {
    e.preventDefault()
    
    let tecla = e.key

    if (tecla == 'y') {
      window.alert("escolhido")
    }
    else if (tecla == 'n') {
      window.alert("nao escolhido")
      setEscolha(0)
      setBgColor('#FFFFFF')
      setText('Olá, você chegou a tempo de escolher seu primeiro Pokémon! Aperte em uma das pokebolas para escolher...')
    }
  }

  return (
    <>
      <header className="cabecalho">
        <img src="../../../../pictures/logo_pokemon.svg" alt="img" width='70%' height='auto'></img>
      </header>
      <div className="imagens" style={{background: bgColor}}>
        {escolha === 0 ? 
          <>
            <img src="../../../../pictures/pokebola.svg" alt="pokebola1" className="pokebola" onClick={() => handleEscolha(1, '#A9E884')}></img>
            <img src="../../../../pictures/pokebola.svg" alt="pokebola2" className="pokebola" onClick={() => handleEscolha(4, '#f09537')}></img>
            <img src="../../../../pictures/pokebola.svg" alt="pokebola3" className="pokebola" onClick={() => handleEscolha(7, '#4DB1E3')}></img>
          </>
          :
          <Image caminho={sprite} width='25%' height='auto' onClick={() => handleEscolha(1)}/>
        }
      </div>
      <div className="caixadialogo">
        {text}
      </div>
      <footer className="rodape">
        <p>João Pedro</p>
      </footer>
    </>
  )
}

export default HomePage
