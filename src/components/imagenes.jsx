import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';



export default function Imagenes () {
    const {products} = useContext(InitDataContext);


    return ( 
        products?.data?.map((product) => {
            
            return <img width={200} src={`http://localhost:3001/img/${product.imagen}`} key={product.id} />
        })
    )
}