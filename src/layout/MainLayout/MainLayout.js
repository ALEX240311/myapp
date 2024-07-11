import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
