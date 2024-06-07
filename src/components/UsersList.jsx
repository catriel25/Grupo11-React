import PropTypes from 'prop-types'

function ProductsList(props) {
    return (
        <tr>
            <td><img width={200} src={`http://localhost:3001/img/userAvatar/${props.avatar}`} key={props.id} /></td>
            <td>{props.id}</td>
            <td>{props.nombre_usuario}</td>
            <td>{props.persona.nombre}</td>
            <td>{props.persona.apellido}</td>
            <td>{props.persona.mail}</td>
            <td>{props.persona.telefono}</td>
        </tr>
    )
}

/*ProductsList.propTypes = {
    id: PropTypes.number,
    descuento: PropTypes.number,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    rating: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    awards: PropTypes.number,
    length: PropTypes.number
}*/

export default ProductsList