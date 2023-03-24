import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null); //option object or null
  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Pink", value: "pink" },
    { label: "Gray", value: "gray" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
