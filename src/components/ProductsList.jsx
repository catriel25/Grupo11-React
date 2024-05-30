import PropTypes from 'prop-types'

function ProductsList(props) {
    return (
        <tr>
            <td>{props.imagen}</td>
            <td>{props.id}</td>
            <td>{props.nombre}</td>
            <td>{props.descuento}</td>
            <td>{props.oferta}</td>
            <td>{props.precio}</td>
            <td>{props.id_categoria}</td>
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