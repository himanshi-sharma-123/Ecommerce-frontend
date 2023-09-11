import NavBar from "../features/navbar/Navbar";
// import ProductList from "../features/productList/ProductList";
import ProductList from "../features/productList/components/ProductList";
function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
}

export default Home;
