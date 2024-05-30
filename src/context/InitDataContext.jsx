import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const InitDataContext = createContext();

function InitDataProvider({ children }) {
    const [data, setData] = useState({
        productsCount: null,
        productsCountByCategory: {},
        products: []
    },{
        productProperty: null,
        product: [],
        img: null
    });

    const getproducts = async () => {
        try {
            const products = await axios.get('http://localhost:3001/api/products');
            setData((value) => ({ ...value, products: products.data }));
        } catch (error) {
            console.log(error);
        }
    }

    const listproducts = async () => {
        try{
            const product = await axios.get('http://localhost:3001/api/products/:id');
            setData((value) => ({ ...value, product: product.data }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async function () {
            try {
                const products = await axios.get('http://localhost:3001/api/products');
                const product = await axios.get('http://localhost:3001/api/products/:id');
                setData({ products: products.data, product: product.data });
            } catch (error) {
                throw new Error(error);
            }
        })()
    }, []);

    useEffect(() => {
        Console.log("Se Actualizo el archivo")
    }, [data]);

    return (
        <InitDataContext.Provider value={{...data, getproducts, listproducts}}>
            {children}
        </InitDataContext.Provider>
    )
}

InitDataProvider.propTypes = {
    children: PropTypes.element
}

export { InitDataContext, InitDataProvider }