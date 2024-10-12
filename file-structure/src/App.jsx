import {Nodes} from "./components/nodes"
import {nodesData} from "./constants/filesData"


function App() {
  return (
    <div className="m-10">
      <ul className="pl-6">
        {nodesData?.map((node) => (
          <Nodes key={node.name} node={node} />
        ))}
      </ul>
    </div>
  );
}

export default App;
