"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const [itemList, setItemList] = useState(items);

  function handleAddItem(newItem: Item) {
    setItemList([...itemList, newItem]);
  }

  return (
    <main className="bg-purple-50 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={itemList} />
      </div>
    </main>
  );
}