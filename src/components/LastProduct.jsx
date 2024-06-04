import { useContext, useEffect, useState } from 'react';
import { InitDataContext } from '../context/InitDataContext';

export default function LastProduct () {
    const {products} = useContext(InitDataContext);
    // const [lastProduct, setLastProduct] = useState(null);
    console.log(products)
    const lastProduct = products?.data[products?.data?.length]
    console.log(products?.data?.length -1)
    console.log(lastProduct)

    // useEffect(() => {
    //     const last = products?.data?.length -1;
    //     console.log(last)
    //     setLastProduct(products?.data[-1])
        

    // }, [products])
    // console.log(lastProduct)

    return (
        <div>
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
                                {/* <td><img width={200} src={`http://localhost:3001/img/${lastProduct.imagen}`} key={lastProduct.id} /></td>
                                <td>{lastProduct.id}</td>
                                <td>{lastProduct.nombre}</td>
                                <td>{lastProduct.descuento}</td>
                                <td>{lastProduct.oferta}</td>
                                <td>{lastProduct.precio}</td>
                                <td>{lastProduct.id_categoria}</td> */}
                            </tr>
                            </tbody>
                        </table>
            
        </div>
    )
}