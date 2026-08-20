import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/componentProductPage/ProductTable";
import { getProducts } from "../services/productService";
import AddProduct from "../components/componentProductPage/AddProduct";
function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [stockFilter, setStockFilter] = useState("all");
  
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

const filteredProducts = products
  .filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((product) => {
    if (stockFilter === "low") {
      return product.stock > 0 && product.stock <= 10;
    }

    if (stockFilter === "out") {
      return product.stock === 0;
    }

    if (stockFilter === "in") {
      return product.stock > 10;
    }

    return true;
  });

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
              <p className="text-sm text-gray-500">
  {filteredProducts.length} products
</p>

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
            <div className="relative max-w-md mb-5 flex gap-3">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
              <select
  value={stockFilter}
  onChange={(e) => setStockFilter(e.target.value)}
  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400"
>
  <option value="all">All Products</option>
  <option value="low">Low Stock</option>
  <option value="out">Out of Stock</option>
  <option value="in">In Stock</option>
</select>
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
