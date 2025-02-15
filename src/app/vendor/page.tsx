"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = [
  "Shop & Retail",
  "Dresses",
  "Shoes",
  "Entertainment",
  "Travel & Leisure",
  "Health & Fitness",
  "Retail",
  "Electronics",
  "Food & Drinks",
  "Fast Food",
  "Delivery",
  "Cars & Drive",
  "Sale & Purchase",
  "Rental Services",
  "Medicine",
  "Groceries",
  "Cafés & Restaurants",
  "Services",
  "Free Coupons",
];

const brands = [
  {
    name: "PRINCES COFFEE",
    category: "Cafés & Restaurants, Food & Drinks",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "SMART AUTOMATIC CARWASH",
    category: "Cars & Drive",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "SULTAN CARWASH",
    category: "Cars & Drive",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "LIGHTNING CARE CARWASH",
    category: "Cars & Drive",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "KABABISH RESTAURANT",
    category: "Food & Drinks",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "KABABISH RESTAURANT",
    category: "Food & Drinks",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "KABABISH RESTAURANT",
    category: "Food & Drinks",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
  {
    name: "KABABISH RESTAURANT",
    category: "Food & Drinks",
    image:
      "https://storage.googleapis.com/dealguru-images/admin/uploads/67a5b045ace5d-ny-hemsida-bilder-300x300.webp",
  },
];

export default function BrandsPage() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div>image</div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
        <div className="flex flex-row justify-between items-center w-full md:w-3/12">
          <button
            className="lg:hidden p-2"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div className="text-lg">All brands</div>
        </div>
        <div className="flex flex-row w-full md:w-6/12 justify-center items-center">
          <input
            type="text"
            placeholder="Search by brands place"
            className="border p-2 w-full md:w-96"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-yellow-400 px-4 py-2 ">Search</button>
        </div>
        <div className=" mt-4 md:mt-0 px-4 py-2 rounded text-lg  bg-yellow-400 ">
          total:15
        </div>
      </div>

      {/* Sidebar Modal */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-96 p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul>
              {categories.map((cat, index) => (
                <li key={index} className="flex justify-between py-2 border-b">
                  <span>{cat}</span>
                  <span className="text-gray-500">(0) </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex">
        <aside className="hidden lg:block w-1/4 p-4 bg-gray-100">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul>
            {categories.map((cat, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>{cat}</span>
                <span className="text-gray-500">(0)</span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="w-full lg:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md bg-white h-74 relative"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-52 object-cover"
                />
                <div className="w-20 h-20 border border-red-800 absolute top-36 left-4 z-10 text-white">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full  object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{brand.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {brand.category.split(", ").map((cat, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-pink-500 text-white px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
