import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista__suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.currentTarget.value)} required={props.obrigatorio} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa