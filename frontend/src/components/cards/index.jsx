import './index.scss';

export default function Cards({titulo, lista, corPrimaria, corSecundaria, data, tensdata, status}){

    let temdata= tensdata


    switch (status) {

        case status= "Completo":
         corPrimaria= '#A3E5BA'
         corSecundaria= '#EFFBE2'
                 break;
    
         case status= "Em andamento":
         corPrimaria= '#DCA3E5'
         corSecundaria= '#EDE2FB'
                    break;

                 case status= "Criado":
                    corPrimaria= '#C3C3C3'
                    corSecundaria= '#F2F2F2'
                    break;

                 case status= "Evento":
                    corPrimaria= '#F6E448'
                    corSecundaria= '#FAF4C1'
                    break;



          default: corPrimaria= '#fff'
                   corSecundaria= '#fff'
                   break;
    }


    return(

<div className='cards'>

<div className='card' style={{ backgroundColor: corSecundaria }}>
    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
        <h2>{titulo}</h2>
    </div>
    <div className='card-conteudo'>
        <h3>Assuntos</h3>
        <pre>
             {lista}<br />
        </pre>
    </div>
    { temdata 
    ? <div className='data'> <p className='tag'>Entrega Trab.</p> <p className='tag'>{data}</p></div>
    : <div className='data'><p className='tag'>sem data</p></div>
    }

</div>

</div>


    )
    
}
