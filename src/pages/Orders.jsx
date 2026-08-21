import { useEffect, useState } from "react";
import { getCarts } from "../services/productService";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FiEye, FiSearch } from "react-icons/fi";
import Table from "../components/Table";

function Orders() {
  const [carts, setCarts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getCarts()
      .then((response) => {
        setCarts(response.data.carts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCarts = carts.filter((cart) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      cart.id.toString().includes(searchValue) ||
      cart.userId.toString().includes(searchValue);

    const matchesFilter =
      filter === "all" ||
      (filter === "high" && cart.total > 500) ||
      (filter === "low" && cart.total <= 500);

    return matchesSearch && matchesFilter;
  });

  const columns = [
    {
      title: "Order",
      key: "order",
      render: (cart) => (
        <span className="text-sm font-semibold text-gray-900">
          #{cart.id}
        </span>
      ),
    },

    {
      title: "Customer",
      key: "customer",
      render: (cart) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
            C
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">
              Customer #{cart.userId}
            </p>

            <p className="text-xs text-gray-400">
              User ID: {cart.userId}
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "Products",
      key: "products",
      render: (cart) => (
        <span className="text-sm text-gray-600">
          {cart.totalProducts} products
        </span>
      ),
    },

    {
      title: "Quantity",
      key: "quantity",
      render: (cart) => (
        <span className="text-sm text-gray-600">
          {cart.totalQuantity}
        </span>
      ),
    },

    {
      title: "Total",
      key: "total",
      render: (cart) => (
        <span className="text-sm font-semibold text-gray-900">
          ${cart.total}
        </span>
      ),
    },

    {
      title: "Status",
      key: "status",
      render: () => (
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
          Paid
        </span>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <button
          className="text-gray-500 transition hover:text-blue-600"
          aria-label="View order"
        >
          <FiEye size={18} />
        </button>
      ),
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <main className="p-6">

          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-bold text-gray-900">
                Orders
              </h1>

              <p className="text-sm text-gray-500">
                {filteredCarts.length} orders
              </p>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Manage your store orders.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-5 flex items-center justify-end gap-3">

            {/* Search */}
            <div className="relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
              />
            </div>

            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400"
            >
              <option value="all">All Orders</option>
              <option value="high">High Value</option>
              <option value="low">Low Value</option>
            </select>

          </div>

          {/* Table */}
          <Table
            columns={columns}
            data={filteredCarts}
          />

        </main>
      </div>
    </div>
  );
}

export default Orders;