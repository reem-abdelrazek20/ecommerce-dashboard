import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getUsers } from "../services/productService";
import Table from "../components/Table";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

function Customers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.phone.includes(searchValue);

    const matchesFilter =
      filter === "all" ||
      user.gender?.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  const columns = [
    {
      title: "Customer",
      key: "customer",
      render: (e) => (
        <div className="flex items-center gap-3">
          <img
            src={e.image}
            alt={e.firstName}
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="text-sm font-medium text-gray-900">
            {e.firstName} {e.lastName}
          </span>
        </div>
      ),
    },

    {
      title: "Email",
      key: "email",
    },

    {
      title: "Phone",
      key: "phone",
    },

    {
      title: "Location",
      key: "location",
      render: (e) => e.address?.city,
    },
  ];

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
                <h1 className="text-2xl font-bold text-gray-900">
                  Customers
                </h1>

                <p className="text-sm text-gray-500">
                  {filteredUsers.length} customers
                </p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Manage your store customers.
              </p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="mb-5 flex items-center justify-end gap-3">

            {/* Search */}
            <div className="relative">
              <FiSearch
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search customers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#090961] focus:ring-2 focus:ring-[#090961]/10"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1 rounded-xl border border-[#090961]/20 bg-[#2727b133] p-1">
              <CiFilter
                size={20}
                className="ml-2 text-[#090961]"
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="cursor-pointer px-3 py-2 text-sm font-medium text-[#090961]  outline-none"
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

          </div>

          {/* Table */}
          <Table
            columns={columns}
            data={filteredUsers}
          />

        </main>
      </div>
    </div>
  );
}

export default Customers;