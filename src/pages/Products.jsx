import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/componentProductPage/ProductTable";
import { getProducts } from "../services/productService";
import AddProduct from "../components/componentProductPage/AddProduct";
function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  
  const [addProduct, setAddProduct] = useState(false);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <main className="p-6">
          {/* Page Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage your store products.
              </p>
            </div>
            <button 
            onClick={()=>setAddProduct(true)}
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
              Add Product
            </button>
          </div>
          <div className="mb-5">
            <div className="relative max-w-md">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>
          </div>

          {/* Products Table */}
          <ProductTable products={filteredProducts} />
        </main>
      </div>
     {addProduct && (
  <AddProduct onClose={() => setAddProduct(false)} />
)}
    </div>
  );
}

export default Products;
