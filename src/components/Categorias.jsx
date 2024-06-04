import { useContext, useEffect, useState } from 'react';
import { InitDataContext } from '../context/InitDataContext';
import styles from './categorias.module.css'

export default function Categorias () {
    const {products} = useContext(InitDataContext);
    const categorias = products?.meta?.countByCategory
    

    return (
        <div className={styles.container}>
            <h2>Categorias</h2>
            <div className={styles.subContainer}>
                {categorias && categorias.map((categoria, index) => (
                    <div key={index}>
                        <h4>{categoria.descripcion}</h4>
                        <h6>{categoria.cantidad}</h6>

                    </div>
                ))}
            </div>

        </div>
        
    )


}