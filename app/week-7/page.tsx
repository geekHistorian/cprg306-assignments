"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const [itemList, setItemList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  function handleAddItem(newItem: Item) {
    setItemList([...itemList, newItem]);
  }

  function handleItemSelect(item: Item) {
    const itemName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")
      .trim();
    setSelectedItemName(itemName);
  }

 return (
  <main className="bg-purple-50 min-h-screen py-8 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Shopping List</h1>
      <div className="flex gap-6">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemList} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </div>
  </main>
);
}