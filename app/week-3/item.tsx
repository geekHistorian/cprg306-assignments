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


type TemplateUser = {
  name: string;
  age: number;
  city: string;
  hobbies: string[];
}

function Main ({name, age, city, hobbies}: TemplateUser) {
  let user1: TemplateUser = {
    name: "Alice",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "swimming"]
  };

  let user2 : TemplateUser = {
    name: "Bob",
    age: 25,
    city: "Los Angeles",
    hobbies: ["gaming", "cycling", "cooking"]
  };

  let user3 : TemplateUser = {
    name: "Charlie",
    age: 35,
    city: "Chicago",
    hobbies: ["hiking", "photography", "gardening"]
  };

  return (
    <div>
      <UserCard {...user1} />
      <UserCard {...user2} />
      <UserCard {...user3} />
    </div>
  );
}

const HobbyList = ({hobbies}: {hobbies: string[]}) => {
    return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
    )
}; 

function UserCard({name, age, city, hobbies}: TemplateUser) {
  return (
    <p>{name} is {age} years old, lives in {city}, and enjoys <HobbyList hobbies={hobbies} />.</p>
  )
};

