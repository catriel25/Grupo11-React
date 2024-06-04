import { InitDataContext } from '../context/InitDataContext';
import { useContext, useEffect, useState } from 'react';
import styles from './lastProduct.module.css'

export default function LastProduct () {
    const {products} = useContext(InitDataContext);
    const [lastProduct, setLastProduct] = useState(null);
    console.log(products)
    useEffect(() => {
        if (products?.data?.length) {
            const lastIndex = products.data.length - 1;
            const last = products.data[lastIndex];
            setLastProduct(last);
        }
    }, [products]);

    if (!lastProduct) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={styles.container}>
            <h2>Ultimo producto agregado</h2>
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
                            <tr>
                                <td><img width={200} src={`http://localhost:3001/img/${lastProduct.imagen}`} key={lastProduct.id} /></td>
                                <td>{lastProduct.id}</td>
                                <td>{lastProduct.nombre}</td>
                                <td>{lastProduct.descuento}</td>
                                <td>{lastProduct.oferta}</td>
                                <td>{lastProduct.precio}</td>
                                <td>{lastProduct.id_categoria}</td>
                            </tr>
                            </tbody>
                        </table>
            
        </div>
    )
}