// "use client";

import { productCategories } from "../constants/product";

const ProductFlterTab = ({ active, onFilter }) => {
  return (
    <div>
      <div role="tablist" className="flex gap-10 justify-center mt-5">
        {["All", ...productCategories].map((category, index) => {
          return (
            <ul
              key={index}
              role="tab"
              className={`tab ${
                active == category ? "bg-red-500 text-white" : null
              }
            p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out
              "tab-active" : ""}`}
              onClick={() => onFilter(category)}
            >
              <li className="text-base">{category}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default ProductFlterTab;
