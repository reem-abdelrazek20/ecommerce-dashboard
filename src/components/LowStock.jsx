function LowStock({ products }) {
  const lowStockProducts = products
    .filter((product) => product.stock <= 10)
    .slice(0, 5);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">

      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Low Stock Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Products that need attention
        </p>
      </div>

      <div className="mt-5">

        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-3 border-b border-gray-100 py-3 last:border-0"
          >

            <div className="flex min-w-0 items-center gap-3">

              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-11 w-11 rounded-lg border border-gray-200 object-cover"
              />

              <div className="min-w-0">

                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {product.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {product.stock} items left
                </p>

              </div>

            </div>

            <span className="shrink-0 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600">
              Low Stock
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LowStock;