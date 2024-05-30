import ProductsList from './ProductsList';
import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';

function Products() {
    const {products} = useContext(InitDataContext);
    const {category} = useContext(InitDataContext);

    return (
        <>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the products in the Database</h1>

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
                                    <th>Id de Categoría</th>
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
        </>
    );
}

export default Products;
