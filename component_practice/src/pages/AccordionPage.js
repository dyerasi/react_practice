import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      label: "can I use react on this, or should i do something else",
      content: "yes you can",
      id: "sdsd",
    },
    { label: "can I use js on this", content: "yes you can", id: "sdsd1" },
    {
      label:
        "can I use rust on this. because rust is the best. nothing compares to rust",
      content: "no you cannot",
      id: "sdsd2",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
