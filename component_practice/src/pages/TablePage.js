import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Bannana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Ube", color: "bg-purple-500", score: 10 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
      // header: () => <th className="bg-red-500">Score</th>, //optional in case want to show not just name as header
    },
  ];

  const keyFn = (fruit) => fruit.name;
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
