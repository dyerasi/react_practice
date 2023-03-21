import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const div_el = useRef(); //set ref={div_el} in a jsx tag(in final return statement) to keep reference to local creation of jsx element

  const handleSelect = (option) => {
    handleClick();
    onChange(option);
  };

  useEffect(() => {
    //determine if user clicked inside or outside of dropdown
    const handler = (event) => {
      if (!div_el.current) {
        return; //if refrence is not shown, will be null reference so do nothing
      }
      if (!div_el.current.contains(event.target)) {
        setIsOpen(false);
      }
      //console.log(div_el.current); //current is current value of refrence
    };

    //will need to manually clean this event listener if not being rendered
    //can return a cleanup function from useEffect that is called during  the NEXT re-render BEFORE useEffect called again
    document.addEventListener("click", handler, true); //last argument means check for event during capture phase also(default is only target and bubble phase)

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer"
        onClick={() => handleSelect(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div ref={div_el} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
