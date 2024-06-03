import PropTypes from 'prop-types'

function CategoryList(props, categories) {
    return (
        <tr>
            <td>{categories.id}</td>
            <td>{categories.descripcion}</td>
            <td>{props.total}</td>
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

export default CategoryList