import { useContext, useEffect, useState } from "react";
import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import { InitDataContext } from "../context/InitDataContext";



const data = [
    {
        title: 'products in Data Base', // total de productos
        color: 'primary',
        icon: 'fa-film',
        quantity: null
    },
    {
        title: 'Total awards',
        color: 'success',
        icon: 'fa-award',
        quantity: 79
    },
    {
        title: 'Actors quantity',
        color: 'warning',
        icon: 'fa-user',
        quantity: 49
    }
]

function ContentRowTop() {
    const {products} = useContext(InitDataContext);
    const [lastMovie, setLastMovie] = useState(null);
    const [setData, setLastData] = useState(data)
    const [lastCount, setLastCount] = useState();
    /*useEffect(() => {
        //setLastMovie(products?.data[products?.data?.length - 1]);
        if(products && products.length > 0) {// si hay productos en la base de datos
            setLastMovie(products[products.length - 1]) // se setea el ultimo producto en la base de datos
            setLastCount(products.length) // se setea el total de productos en la base de datos
        }
    }, [products]);*/

    useEffect(() => {
        if(data[0].quantity === null) {
            setLastCount(products.length) // total de productos
            setLastData(data[0].quantity = lastCount) // total de productos 
        }
    }, [])


    useEffect(() => {
        console.log('Products:', products);
        console.log('Data:', data);
    }, [products, data]);

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowMovie data={data} />
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                {lastMovie && <LastMovieInDb data={lastMovie} />}
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <GenresInDb />
            </div>
        </div>
    );
}

export default ContentRowTop;