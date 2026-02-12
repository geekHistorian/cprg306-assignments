import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-purple-50 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}