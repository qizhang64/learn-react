import { ItemProps } from "@/types/item";

function StrikedItem({label} : {label:string}) {
  return (
    <del>
      {label}
    </del>
  )
}
function Item({ name, isPacked } : ItemProps) {
  return (
    <li className="item">
      {isPacked   ?
        (name) :
        <StrikedItem label = {name}/>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
