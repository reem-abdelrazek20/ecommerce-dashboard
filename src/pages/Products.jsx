
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="layout flex min-h-screen">
      <Sidebar />

      <div className="main flex-1">
        <Header />

        <main className="p-6">

          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Products
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your store products.
            </p>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">

            <table className="w-full min-w-[800px]">

              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Price
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Stock
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >

                    {/* Product */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-12 w-12 rounded-lg border border-gray-200 object-contain"
                        />

                        <span className="max-w-[220px] truncate text-sm font-medium text-gray-900">
                          {product.title}
                        </span>

                      </div>

                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 text-sm capitalize text-gray-600">
                      {product.category}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      ${product.price}
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.stock}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      {product.stock <= 10 ? (
                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                          Low Stock
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                          In Stock
                        </span>
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Products;

