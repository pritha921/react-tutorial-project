// import Message from "./Message"
import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    "West Bengal",
    "Odisha",
    "Madhya Pradesh",
    "Rajasthan",
    "Meghalaya",
  ];
  return  <div>
    <ListGroup items={items } heading="Cities"/>
  </div>
}

export default App;