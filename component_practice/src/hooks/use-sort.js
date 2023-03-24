import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  //unsorted -> asc -> desc -> unsorted
  const setSortLabel = (label) => {
    if (sortOrder === null || label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //never directly modify a prop passed down...make a copy to change [...data]
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy); //find correct sorting value function

    sortedData = [...data].sort((a, b) => {
      //array is [b, a]: return negative to switch
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return { sortBy, sortOrder, sortedData, setSortLabel };
}

export default useSort;
