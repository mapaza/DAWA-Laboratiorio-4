import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  //Estado indice seleccionado
  const [selected, setSelected] = useState(0)
  //Estado de los votos, se almacenan en un array de 6 valores que guarda
  //los votos y se relaciona con anecdotes segun su indice o estado de selected
  const [votos, setVotos] = useState([0,0,0,0,0,0])
  
  //Verificar el largo del array
  console.log(anecdotes.length)
  
  //Función anecdotaRandom(), permite obtener un número random y 
  // y asigna el resultado a selected
  const anecdotaRandom = () => {
    var random=Math.floor(Math.random()*anecdotes.length)
    console.log(random)
    setSelected(random)
  }
  //Función que permite manejar el click del boton de votar
  // Y aumenta la cantidad de votos
  const handlerClickVotos = () =>{
    //Se aplica desectructuramiento y se crea una copia de los votos
    var nuevos_votos = [...votos]
    //Se aumenta la cantidad de votos en la posicion seleccionada (selected)
    // en +1
    nuevos_votos[selected] = nuevos_votos[selected]+1
    //Se asigna el nuevo array indicando el valor en la posiicion
    //seleccionada con su nuevo valor.
    setVotos(nuevos_votos)
  }
  //Funcion de retorno que permite encontrar el mayor voto 
  //dentro del array votos y retorna el indice
  const maxVotos = () => {
		var max = -1 
    var maximo_indice = -1
		
		for(let cont in votos) {
			if (votos[cont] > max) {
				maximo_indice = cont
				max = votos[cont]
			}
		}
		return maximo_indice
	}

  return (
    <div>
      <h1>Anecdota del dia</h1>
      {props.anecdotes[selected]}
      <br/>
      <br/>
      <button onClick={anecdotaRandom}>Next Anecdote</button>
      <br/>
      <br/>
      <button onClick={handlerClickVotos}>Vote</button>
      <br/>
      <br/>
      <p>Has: {votos[selected]}</p>
      <h1>Anecdota más votada</h1>
      <p>{anecdotes[maxVotos()]}</p>
      <p>Tiene {votos[maxVotos()]} votos </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)