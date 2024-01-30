export function Friend({ friend, selectedPerson, PersinSelected }) {
  // console.log(friend.id);
  function handelOneperson(e) {
    e.preventDefault();
    selectedPerson(friend);
  }

  const isSelected = PersinSelected?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <button onClick={(e) => handelOneperson(e)} className="button">
        {isSelected ? "Close" : "selected"}
      </button>
    </li>
  );
}
