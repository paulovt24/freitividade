
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Cards from '../../components/cards';

function App() {

  let cards= [

    {
"titulo": 'Componentes',
"lista": `
- Objetos e Lista de Objetos
- Componentes`,
"data": '26/agosto', 
"tensdata": false,
"corPrimaria" : '#A3E5BA',
"corSegundaria" : '#EFFBE2'
    },
    {
"titulo": 'Renderização e Efeito',
"lista":   `
- Componentes na renderização.`,
"data": '2/setembro',
"tensdata": false,
"corPrimaria" : '#DCA3E5',
"corSegundaria" : '#EDE2FB' 

    },
    {
"titulo": 'Consumindo APIs - Parte 1',
"lista":   `
- Componentes na renderização.`,
"data": '9/setembro',
"tensdata": true,
"corPrimaria" : '#C3C3C3',
"corSegundaria" : '#F2F2F2' 
    },
    {
"titulo": 'Prova Prática e Teórica',
"lista":   `
- Criando um projeto React
- Estilização com SCSS
- Navegação entre telas
- Variáveis de estado
- Renderização de lista
- Componentes`,
"data": '16/setembro',
"tensdata": true,
"corPrimaria" : '#F6E448',
"corSegundaria" : '#FAF4C1'   
    },
    {
"titulo": '',
"lista":   `Fim do terceiro Bimestre

água não se mistura com óleo, nem nós com comédia` 
    }
  ]
    

  return (
    <div className="appzin">
     <Cabecalho />
      
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
   
        /> 
    )
    }  
      </div>


        


      </section>

    </div>
  );
}

export default App;



  