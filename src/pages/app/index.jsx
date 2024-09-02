
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Cards from '../../components/cards';

function App() {

  let corPrimaria = '#A3E5BA'
  let corSegundaria = '#EFFBE2'

  let cards= [

    {
      "titulo": 'Componentes',
      "lista":   `-Objetos e Lista de Objetos
                  -Componentes`, 
      
    },
    {
      "titulo": 'Renderização e Efeito',
      "lista":   `-Objetos e Lista de Objetos
      -Componentes` 
    },
    {
      "titulo": 'Componentes',
      "lista":   `-Objetos e Lista de Objetos
      -Componentes` 
    },
    {
      "titulo": 'Componentes',
      "lista":   `-Objetos e Lista de Objetos
      -Componentes` 
    },
    {
      "titulo": 'Componentes',
      "lista":   `-Objetos e Lista de Objetos
      -Componentes` 
    }
  ]
    

  return (
    <div className="appzin">
     <Cabecalho />
      
      <section className='conteudo'> 
      <h1> Conteúdos </h1>

      

      {
    cards.map(card =>
        <Cards

        corPrimaria={corPrimaria} 
        corSecundaria={corSegundaria}
        titulo = {card.titulo}
        lista = {card.lista}
   
        /> 
    )
    }  
        


      </section>

    </div>
  );
}

export default App;



  