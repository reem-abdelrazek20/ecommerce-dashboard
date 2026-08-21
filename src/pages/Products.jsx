import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getProducts } from "../services/productService";
import ProductTable from "../components/componentProductPage/ProductTable";
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
      product.title.toLowerCase().includes(search.toLowerCase()),
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
              <div className="flex items-center gap-5">
                <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} products
                </p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Manage your store products.
              </p>
            </div>
            <button
              onClick={() => setAddProduct(true)}
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Add Product
            </button>
          </div>

          <div className=" flex items-center gap-2.5 justify-end mb-5  ">
            <button className="flex items-center gap-1 border border-[#090961]/70 rounded-xl px-3 py-2 bg-[#2727b133] transition-all duration-200 hover:border-[#090961] hover:shadow-sm">
              <span>
                <CiFilter />
              </span>
              <span>filter</span>
            </button>
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

          {/* Products Table */}
          <ProductTable products={filteredProducts} />
        </main>
      </div>
      {addProduct && <AddProduct onClose={() => setAddProduct(false)} />}
    </div>
  );
}

export default Products;
