import { useState } from "react";

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //use this way if event handler has lots of code
  //otherwise just do inline function in mapping function calling setter
  /*
  const handleClick = (index) => {
    setExpandedIndex(index);
  };
  */

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    //functional update to state to avoid old stale value causing bugs
    //ie two call to update state before first one finishes updating state
    const handleClick = (nextIndex) => {
      setExpandedIndex((current) => {
        //read current state value before updating
        if (nextIndex === current) {
          return -1;
        } else {
          return nextIndex;
        }
      });
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
