function ListGroup() {
  let items = [
    "West Bengal",
    "Odisha",
    "Madhya Pradesh",
    "Rajasthan",
    "Meghalaya",
  ];
  items=[];
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item Found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
