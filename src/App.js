import "./App.css";
import Table from "./components/Table/Table";
import ModularWindow from "./components/ModularWindow/ModularWindow";
import React, { useState, useEffect } from "react";
import { apiGetList } from "./api";

function App() {
  const [targetTableItem, setTargetTableItem] = useState(null);
  const [list, setList] = useState(null);

  const [stateModularWindow, setStateModularWindow] = useState(false);

  useEffect(() => apiGetList().then((resBody) => setList(resBody)), []);

  const getTargetItem = (id) => {
    const targetItem = list.find((item) => item.id === id);
    setTargetTableItem(targetItem);
    setStateModularWindow(true);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>Test</h1>
      </header>
      <main className="App__main">
        <Table getTargetItem={getTargetItem} list={list} />

        {stateModularWindow === true && (
          <ModularWindow
            setTargetTableItem={setTargetTableItem}
            targetTableItem={targetTableItem}
            setStateModularWindow={setStateModularWindow}
          />
        )}
      </main>
    </div>
  );
}

export default App;
