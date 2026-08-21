export default function Table({ title, paragraph, columns, data }) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {paragraph}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full">

          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-600"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-600"
                  >
                    {column.render
                      ? column.render(item)
                      : item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  );
}