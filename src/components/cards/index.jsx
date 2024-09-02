import './index.scss';

export default function Cards({titulo, lista, corPrimaria, corSecundaria}){

    let temdata=false

    return(

<div className='cards'>

<div className='card' style={{ backgroundColor: corSecundaria }}>
    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
        <h2>{titulo}</h2>
    </div>
    <div className='card-conteudo'>
        <h3>Assuntos</h3>
        <pre>
            - {lista}<br />
        </pre>
    </div>
    { temdata 
    ? <p className='tag'>26/agosto</p>
    : <p className='tag'>sem data</p>
    }

</div>
</div>


    )
    
}
