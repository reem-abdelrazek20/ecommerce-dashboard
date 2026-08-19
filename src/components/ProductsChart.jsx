import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProductsChart({ products }) {
  const categoryData = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          category: product.category,
          count: 0,
        };
      }

      acc[product.category].count++;

      return acc;
    }, {})
  );

  return (
    <div className="products-chart">
      <div className="chart-header">
        <div>
          <h2>Products by Category</h2>
          <p>Number of products in each category</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={categoryData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
          />

          <Bar
            dataKey="count"
            fill="green"
            radius={[6, 6, 0, 0]}
            barSize={45}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductsChart;