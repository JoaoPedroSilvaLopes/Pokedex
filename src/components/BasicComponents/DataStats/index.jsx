import './styles.css'

const DataStats = ({textStat, stat}) => {
  return (
    <div className="containerStats">
        <p className='tipoStat'>{textStat}</p>
        <p className='stat'>{stat}</p>
    </div>
  )
}

export default DataStats