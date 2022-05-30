import './styles.css'

export function DataText({descricaoDado, dado}) {
    return <div className='descricaoDado'>
        <p className='tipoDado'>{descricaoDado}</p>
        <p className='dado'>{dado}</p>
    </div>
}