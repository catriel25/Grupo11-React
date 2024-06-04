import { useContext, useEffect, useState } from 'react';
import { InitDataContext } from '../context/InitDataContext';

export default function Totales () {
    const {products} = useContext(InitDataContext);
    const {users} = useContext(InitDataContext);
    const totalProductos = products?.meta?.totalProducts;
    const totalCategorias = products?.meta?.countByCategory?.length;
    const totalUsuarios = users?.meta?.total

    return (
        <div>
            
            <div>
<h4>Total de Productos</h4>
                <h6>{totalProductos}</h6>
            </div>
            <div>
                <h4>Total de Categorias</h4>
                <h6>{totalCategorias}</h6>
            </div>
            <div>
                <h4>Total de Usuarios</h4>
                <h6>{totalUsuarios}</h6>
            </div>
            

        </div>
        
    )


}