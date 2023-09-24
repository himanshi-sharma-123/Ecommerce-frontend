import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
// import ProductList from "../features/productList/ProductList";
import ProductList from "../features/productList/components/ProductList";
import Footer from "../features/common/Footer";
function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
      {/* <Link to="/admin">Admin</Link> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
