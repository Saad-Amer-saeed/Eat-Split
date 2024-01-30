import { Friend } from "../SubComponent/Friend";

export function FriendsList({ lastList, selectedPerson, PersinSelected }) {
  const friends = lastList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedPerson={selectedPerson}
          PersinSelected={PersinSelected}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
