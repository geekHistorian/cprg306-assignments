"use client";

import { useState } from "react";
import Item from "./item";


type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

type ItemListProps = {
  items: ItemType[];
};

export default function ItemList({ items }: ItemListProps) {
  const [sortBy, setSortBy] = useState("name");

  const displayItems = [...items];

  const sortedItems = [...items].sort((a, b) => {
    if (a[sortBy as keyof ItemType] < b[sortBy as keyof ItemType]) return -1;
    if (a[sortBy as keyof ItemType] > b[sortBy as keyof ItemType]) return 1;
    return 0;
  });

  const groupedItems = [...items].reduce((groups: Record<string, ItemType[]>, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  return (
    
    <div className="bg-white rounded-lg p-6 shadow border border-purple-200">
      <div className="mb-6">
        <p className="text-sm font-semibold text-purple-700 mb-3">Sort & Filter</p>
        <div className="flex gap-3">
          <button
            className={sortBy === "name" ? "bg-purple-500 text-white px-4 py-2 rounded" : "bg-purple-100 text-purple-800 px-4 py-2 rounded"}
            onClick={() => setSortBy("name")}
          >
            Sort by Name
          </button>
          <button
            className={sortBy === "category" ? "bg-purple-500 text-white px-4 py-2 rounded" : "bg-purple-100 text-purple-800 px-4 py-2 rounded"}
            onClick={() => setSortBy("category")}
          >
            Sort by Category
          </button>
          <button
            className={sortBy === "grouped" ? "bg-purple-500 text-white px-4 py-2 rounded" : "bg-purple-100 text-purple-800 px-4 py-2 rounded"}
            onClick={() => setSortBy("grouped")}
          >
            Group by Category
          </button>
        </div>
      </div>

      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-purple-800 mb-3 capitalize">
                {category}
              </h2>
              <ul className="space-y-2">
                {groupedItems[category]
                  .sort((a, b) => (a.name < b.name ? -1 : 1))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}