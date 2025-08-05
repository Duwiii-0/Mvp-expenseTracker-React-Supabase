import AddNew from "../components/Addnew";

const defaultCategories = [
  { name: 'Transport', type: 'expense' },
  { name: 'Food', type: 'expense' },
  { name: 'Salary', type: 'income' },
];

const Categories = () => {
  return (
    <div className="relative w-full bg-amber-900/5 flex flex-col items-start justify-start min-h-screen pt-40 px-40">
      <div className="fixed bottom-30 right-40 z-10">
      <AddNew 
        Label="Add New Category" 
        bgColor="bg-black/50"
        textColor="text-white"
      />
      </div>
      <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">All Categories</h1>
          <table className="mt-8 w-full">
            <thead className="">
              <tr className="bg-black/40 ">
                <th className="w-1/15  px-6 py-6 text-right font-semibold text-white text-sm uppercase tracking-wider">
                  <span className="text-center">No</span>
                </th>
                <th className="w-1/4 px-12 py-6 text-left font-semibold text-white text-sm uppercase tracking-wider">
                    <span className="text-center">Category Name</span>
                </th>
                <th className="w-1/3 px-8 py-6 text-center font-semibold text-white text-sm uppercase tracking-wider">
                    <span className="text-center">Type</span>
                </th>
                <th className="w-1/3 px-8 py-6 text-center font-semibold text-white text-sm uppercase tracking-wider">
                    <span className="text-center">Total</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-50">
              {defaultCategories.map((category, index) => (
                <tr key={index} className="cursor-pointer bg-gray-300 hover:bg-black/10 hover:scale-101 transition-transform duration-400">
                  <td className="px-8 py-6 w-1/15 text-right">
                    <div className="text-black  font-bold">{index + 1}</div>
                  </td>
                  <td className="px-12 py-6 w-1/4 text-left">
                    <div className="">
                      <div>
                        <div className="text-black font-medium">{category.name}</div>
                        <div className="text-black/50 text-sm">Category</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 w-1/3 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                      category.type.toLowerCase() === 'expense' 
                        ? 'bg-red-500/20 text-red-700 border-red-500/30'
                        : 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30'
                    }`}>
                      {category.type}
                    </span>                 
                  </td>
                  <td className="px-8 py-6 w-1/3 text-center">
                    <div className="count-badge text-black font-bold px-4 py-2 rounded-lg inline-block min-w-[60px]">
                      0000
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>      
      </div>  
    </div>
  );
};

export default Categories;