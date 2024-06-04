import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Products from "./Products";
import Totales from "./Totales";
import LastProduct from "./LastProduct";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Totales />
                <Products />

                <LastProduct />

                
                
               
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;