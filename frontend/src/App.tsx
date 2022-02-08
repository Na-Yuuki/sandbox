import logo from "./logo.svg";
import "./App.css";
import { ContentTableGroup } from "./components/parts/content-table";

function App() {
  const { contentTable } = ContentTableGroup;

  return (
    <div className="App">
      <header className="App-header">
        <div className="mb-20">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-green-300">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <article className="w-3/4">
          <h4>DEMO VIEW</h4>
          <contentTable.table>
            <contentTable.thead>
              <contentTable.tr>
                <contentTable.th>項目1</contentTable.th>
                <contentTable.th>項目2</contentTable.th>
              </contentTable.tr>
            </contentTable.thead>
            <contentTable.tbody>
              <contentTable.tr>
                <contentTable.td>value1</contentTable.td>
                <contentTable.td>value2</contentTable.td>
              </contentTable.tr>
            </contentTable.tbody>
          </contentTable.table>
        </article>
      </header>
    </div>
  );
}

export default App;
