import { useEffect, useState } from "react";
import "../styles/header.css";
import { getProducts } from "../services/productService";
import { IoMdSearch, IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  const [search, setSearch] = useState("");
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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header className="header">

      <div className="header-left">

        <div className="search-box">
          <IoMdSearch />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product, customer, etc ..."
          />
        </div>

        {search.trim() && (
          <div className="search-results">

            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="search-result"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />

                  <span>{product.title}</span>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}

          </div>
        )}

      </div>

      <div className="header-right">

        <button className="notification-button">
          <IoIosNotificationsOutline />
        </button>

        <div className="admin">

          <button
            className="admin-avatar"
            popovertarget="menu"
            aria-label="Open admin menu"
          >
            A
          </button>

          <div className="admin-info">
            <span className="admin-name">Admin</span>
            <span className="admin-role">Administrator</span>
          </div>

        </div>

      </div>

      <div id="menu" popover="auto">
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

    </header>
  );
}

export default Header;