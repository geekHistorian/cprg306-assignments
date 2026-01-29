import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-purple-200 p-6">
      <div className="mx-auto max-w-md rounded-xl bg-purple-50 p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-purple-900">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
