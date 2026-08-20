export default function AddProduct({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Add Product
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add a new product to your store.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <form className="space-y-4">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Price
              </label>

              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Stock
              </label>

              <input
                type="number"
                placeholder="0"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>

            <input
              type="text"
              placeholder="Enter category"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
             onClick={onClose}
              type="submit"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Add Product
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}