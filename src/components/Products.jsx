import ProductsList from './ProductsList';
import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';
import styles from './products.module.css'

function Products() {
    const {products} = useContext(InitDataContext);

    return (
        <div className={styles.container}>
            {/*<!-- MOVIES LIST -->*/}
            <h2>Todos los productos de la base de datos</h2>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Descuento</th>
                                    <th>Oferta</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                    <th>Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.data?.map((product, index) => {
                                        return <ProductsList  {...product} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
