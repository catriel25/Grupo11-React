import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Products from "./Products";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Products />
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;