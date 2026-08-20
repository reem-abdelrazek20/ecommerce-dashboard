import { useEffect, useState } from "react";
import { getProducts, getCarts } from "../services/productService";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/dashboard.css";
import StatCard from "../components/componentDashboard/StatCard";
import ProductsChart from "../components/componentDashboard/ProductsChart";
import LowStock from "../components/componentDashboard/LowStock";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FiAlertTriangle ,FiShoppingCart,FiPackage  } from "react-icons/fi";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  

useEffect(() => {
  getProducts()
    .then((response) => {
      setProducts(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    });

  getCarts()
    .then((response) => {
      setCarts(response.data.carts);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  const totalProductValue = products.reduce(
  (total, product) => total + product.price,
  0
);
const lowStockProducts = products.filter(
  (product) => product.stock <= 10
);


return (
  <div className="layout">
    <Sidebar />

    <div className="main">
      <Header />

      <main className="dashboard-content">

        <div className="dashboard-intro">
          <h1>Dashboard</h1>
          <p>Monitor your store's progress to increase your sales.</p>
        </div>

        <section className="stats-cards">

          <StatCard
            icon={<FaMoneyBillTrendUp />}
            title="Total Products"
            value={products.length}
            change="Products available"
          />

          <StatCard
            icon={<FiShoppingCart />}
            title="Total Orders"
            value={carts.length}
            change="Orders in store"
          />

          <StatCard
            icon={<FiPackage />}
            title="Total Product Value"
            value={`$${totalProductValue.toFixed(2)}`}
            change="Total value of products"
          />

          <StatCard
            icon={<FiAlertTriangle />}
            title="Low Stock"
            value={lowStockProducts.length}
            change="Needs attention"
          />

        </section>

        <div className="dashboard-charts">
          <ProductsChart products={products} />
          <LowStock products={products} />
        </div>

      </main>

    </div>
  </div>
);
}

export default Dashboard;
