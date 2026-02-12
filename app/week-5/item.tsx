type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="bg-purple-50 border border-purple-200 rounded p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold text-purple-800">{name}</p>
        <p className="text-sm text-purple-600 capitalize">{category}</p>
      </div>
      <p className="bg-purple-500 text-white rounded px-3 py-1 font-semibold">Qty: {quantity}</p>
    </li>
  );
}