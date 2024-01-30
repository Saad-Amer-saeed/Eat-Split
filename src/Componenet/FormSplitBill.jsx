import { useState } from "react";
import { Button } from "./Button";

export function FormSpiltBill({ PersinSelected }) {
  const [spiltContain, setspiltContain] = useState({
    BillValue: null,
    YourExpense: null,
    Select: null,
  });

  function handelerSpelet(text, input, HisExpense) {
    setspiltContain((prevState) => ({
      ...prevState,
      [input]: input === "Select" ? text : Number(text),
    }));

    if (HisExpense) {
      setspiltContain((prevState) => ({
        ...prevState,
        HisExpense: HisExpense,
      }));
    }
  }

  const BillValue = spiltContain.BillValue;
  const yourExpense = spiltContain.YourExpense;
  const HisExpense = BillValue - yourExpense;

  // if (
  //   HisExpense
  //     ? setspiltContain((prevState) => ({
  //         ...prevState,
  //         [HisExpense]: HisExpense,
  //       }))
  //     : ""
  // )
  return (
    <form className="form-split-bill">
      <h2>Spilt a bill with {PersinSelected.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        onChange={(e) => handelerSpelet(e.target.value, "BillValue")}
      />

      <label>Your expense</label>
      <input
        type="number"
        onChange={(e) => handelerSpelet(e.target.value, "YourExpense")}
      />

      <label>{PersinSelected.name} expense</label>
      <input type="text" disabled value={HisExpense}></input>
      <label>Who is paying the bill</label>
      <select
        onChange={(e) => handelerSpelet(e.target.value, "Select", HisExpense)}
      >
        <option value="user">you</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
