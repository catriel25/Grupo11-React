import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const InitDataContext = createContext();

axios.interceptors.response.use(
    response => response,
    error => {
        console.log('Error en la respuesta:', error.response ? error.response : error.message);
        return Promise.reject(error);
    }
);

function InitDataProvider({ children }) {
    const [data, setData] = useState({
        productsCount: null,
        productsCountByCategory: {},
        products: [],
        productProperty: null,
        product: {},
        img: null
    });

    const getproducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            setData((value) => ({ ...value, products: response.data }));
        } catch (error) {
            console.log(error);
        }
    }

    const listproducts = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/products/${id}`);
            setData((value) => ({ ...value, product: response.data }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async function () {
            try {
                const productsresponse = await axios.get('http://localhost:3001/api/products');
                const productresponse = await axios.get('http://localhost:3001/api/products/1'); // Usa un id real

                setData((value) => ({
                    ...value,
                    products: productsresponse.data,
                    product: productresponse.data
                }));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        console.log("Se Actualizo el archivo");
    }, [data]);

    return (
        <InitDataContext.Provider value={{ ...data, getproducts, listproducts }}>
            {children}
        </InitDataContext.Provider>
    );
}

InitDataProvider.propTypes = {
    children: PropTypes.element
};

export { InitDataContext, InitDataProvider };