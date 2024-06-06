import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Products from "./Products";
import Totals from "./Totals";
import LastProduct from "./LastProduct";
import Categorias from "./Categorias";
import styles from './contentWrapper.module.css';


function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                
                <LastProduct />
                <div className={styles.totalsContainer}>
                    <Totals />
                    <Categorias />
                </div>
                <Products />
                


                

                
                
               
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;