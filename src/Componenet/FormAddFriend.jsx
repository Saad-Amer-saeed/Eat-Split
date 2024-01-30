import { useState } from "react";
import { Button } from "./Button";
export function FormAddFriend({ handelAddFriend }) {
  const idd = crypto.randomUUID();

  const [addFriend, setFriend] = useState({
    id: crypto.randomUUID(),
    name: "",
    image: "",
    balance: 0,
  });

  function handleOnchange(e, name, image) {
    setFriend((prevalue) => ({
      ...prevalue,
      [name]: e,
      [image]: `https://i.pravatar.cc/48?=${idd} `,
    }));
  }

  function handelAddFriend1(e) {
    e.preventDefault();
    handelAddFriend(addFriend);
    setFriend({ id: crypto.randomUUID(), name: "", image: "", balance: 0 });
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handelAddFriend1(e)}>
      <label>@ Friend name</label>
      <input
        type="text"
        value={addFriend.name}
        onChange={(e) => handleOnchange(e.target.value, "name", "image")}
      />
      <label>@ Image URL</label>
      <input type="TEXT" value={addFriend.image} />
      <Button>Add Friend</Button>
    </form>
  );
}
