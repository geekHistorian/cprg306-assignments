"use client";

import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || name.length < 2) {
      alert("Item name must be at least 2 characters long.");
      return;
    }

    const item = { name, quantity, category };
    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  const isNameInvalid = name.length === 0 && nameTouched;
  const isFormValid = name.length >= 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Item</h1>
          <p className="text-gray-500 text-sm">Fill in the details below to add an item to your list</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name Input */}
          <div>
            <label htmlFor="itemName" className="block text-sm font-semibold text-gray-700 mb-2">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              id="itemName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
              required
              placeholder="e.g., Apples, Milk, Bread"
              className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                isNameInvalid 
                  ? "border-red-500 focus:ring-red-500 bg-red-50" 
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
              }`}
            />
            {isNameInvalid && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span className="text-lg">⚠</span> Item name is required (min 2 characters)
              </p>
            )}
            {name.length >= 2 && !isNameInvalid && (
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                <span className="text-lg">✓</span> Item name is valid
              </p>
            )}
          </div>

          {/* Quantity Input */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
              >
                −
              </button>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max="99"
                required
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-semibold text-gray-900 hover:border-gray-400 transition-all"
              />
              <button
                type="button"
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
              >
                +
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">Range: 1 - 99</p>
          </div>

          {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select 
              id="category"
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all text-gray-900 font-medium bg-white cursor-pointer"
            >
              <option value="produce">🥕 Produce</option>
              <option value="dairy">🥛 Dairy</option>
              <option value="bakery">🍞 Bakery</option>
              <option value="meat">🥩 Meat</option>
              <option value="frozen foods">❄️ Frozen Foods</option>
              <option value="canned goods">🥫 Canned Goods</option>
              <option value="dry goods">🌾 Dry Goods</option>
              <option value="beverages">🥤 Beverages</option>
              <option value="snacks">🍿 Snacks</option>
              <option value="household">🧹 Household</option>
              <option value="other">📦 Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid 
                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg active:scale-95 cursor-pointer" 
                : "bg-gray-400 cursor-not-allowed opacity-70"
            }`}
          >
            <span className="text-lg">➕</span> Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewItem;