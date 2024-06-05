import React from "react";

const ArraySample = () => {
  const data = [
    { id: 1, name: "Apple", categories: ["Fruit"] },
    { id: 2, name: "Carrot", categories: ["Vegetable"] },
    { id: 3, name: "Banana", categories: ["Fruit"] },
    { id: 4, name: "Broccoli", categories: ["Vegetable"] },
  ];

  const mappedData = data.map((item) => ({
    ...item,
    newName: `${item.name} - ${item.categories.join(", ")}`,
  }));

  const flatData = data.map((item) => item.categories).flat();

  // Slice operation
  const slicedData = data.slice(1, 3); // Get elements at index 1 and 2

  // Filter operation
  const filteredData = data.filter((item) => item.categories.includes("Fruit"));

  return (
    <>
      <h2 className="text-2xl font-bold text-blue-400">Map Operation</h2>
      <pre>{JSON.stringify(mappedData, null, 2)}</pre>

      <h2 className="text-2xl font-bold text-blue-400">Flat Operation</h2>
      <pre>{JSON.stringify(flatData, null, 2)}</pre>

      <h2 className="text-2xl font-bold text-blue-400">Slice Operation</h2>
      <pre>{JSON.stringify(slicedData, null, 2)}</pre>

      <h2 className="text-2xl font-bold text-blue-400">Filter Operation</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </>
  );
};

export default ArraySample;
