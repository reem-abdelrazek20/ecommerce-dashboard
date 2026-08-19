
function StatCard({ title, value, change, icon }) {
  return (
    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5">
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          
          {title}
        </span>

        {icon}
      </div>

      <h2 className="mt-4 text-2xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {change}
      </p>

    </div>
  );
}

export default StatCard;