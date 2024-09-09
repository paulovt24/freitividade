
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Cards from '../../components/cards';
import axios from 'axios'
import { useState } from 'react';




function App() {

const [cards, setCards] = useState([])

async function ListarCards(){

const resposta= axios.get('http://localhost:3001/cards')
setCards(resposta.data)

}


return (
  <div className="appzin">
   <Cabecalho />
    
<button onClick={ListarCards}>Exibir</button>

    <section className='conteudo'> 
    <h1> Conteúdos </h1>

    <div className='cartoes'>

    {
     cards.map(card =>
      <Cards

      corPrimaria={card.corPrimaria} 
      corSecundaria={card.corSegundaria}
      titulo = {card.titulo}
      lista = {card.lista}
      data = {card.data}
      tensdata={card.tensdata}
      status={card.status}
 
      /> 
  )
  }  
    </div>


      


    </section>

  </div>
);
}

export default App;





    
  

  