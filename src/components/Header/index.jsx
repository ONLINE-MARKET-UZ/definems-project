import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./style.scss";
const index = () => {
    return (
        <header>
           <div className="container mx-auto">
             <HeaderTop />
             <Navbar />
            </div> 
        </header>
    );
};

export default index;