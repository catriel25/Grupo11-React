import { useContext, useEffect, useState } from "react";
import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import { InitDataContext } from "../context/InitDataContext";

function ContentRowTop() {
    const {products} = useContext(InitDataContext);
    const [lastMovie, setLastMovie] = useState(null);
    const [data, setData] = useState([{
        title: 'products in Data Base', // total de productos
        color: 'primary',
        icon: 'fa-film',
        quantity: null
    }])

    /*const updateProductCount = () => {
        const product = products.data
        const updatedData = [...data];
        updatedData[0].quantity = product.length;
        setData(updatedData);
    };

    useEffect(() => {
        updateProductCount();
    }, [products]);*/ // Este es el conteo de productos, luego arreglamos el error

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