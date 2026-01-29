function Item(props: { name: string; quantity: number; category: string }) {
  return (
    <li className="flex justify-between rounded-lg bg-purple-300 border border-purple-400 p-3 mb-2 text-purple-900">
      <span className="font-medium">{props.name}</span>
      <span className="opacity-90">x{props.quantity}</span>
      <span className="italic opacity-80">{props.category}</span>
    </li>
  );
}

export default Item;
