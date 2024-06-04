import { useContext, useEffect, useState } from 'react';
import { InitDataContext } from '../context/InitDataContext';
import styles from './totals.module.css'

export default function Totales () {
    const {products} = useContext(InitDataContext);
    const {users} = useContext(InitDataContext);
    const totalProductos = products?.meta?.totalProducts;
    const totalCategorias = products?.meta?.countByCategory?.length;
    const totalUsuarios = users?.meta?.total

    return (
        <div className={styles.container}>
            <h2>Totales Generales</h2>
            <div className={styles.subContainer}>
                <div>
                    <h4>Productos</h4>
                    <h6>{totalProductos}</h6>
                </div>
                <div>
                    <h4>Categorias</h4>
                    <h6>{totalCategorias}</h6>
                </div>
                <div>
                    <h4>Usuarios</h4>
                    <h6>{totalUsuarios}</h6>
                </div>
            </div>
            

        </div>
        
    )


}