import CategoryList from './CategoryList';
import { useContext, useState, useEffect } from 'react';
import { InitDataContext } from '../context/InitDataContext';

function productsCountByCategory() {
    const {products, CountByCategory} = useContext(InitDataContext);
    const [setCategories, setLastCategories] = useState()

    useEffect(()=>{
        let total
        if(products.length.id_categoria === CountByCategory.length.id){
            

            setLastCategories()
        }
    },[])

    return (
        <>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the products in the Database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>descripcion</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.data?.map((product, index) => {
                                        return <CategoryList  {...product} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default productsCountByCategory;
