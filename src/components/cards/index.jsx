import './index.scss';

export default function Cards({titulo, lista, corPrimaria, corSecundaria, data, tensdata}){

    let temdata= tensdata

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
