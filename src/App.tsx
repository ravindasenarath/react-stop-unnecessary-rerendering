import React, { useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import './App.css';
import { FlexRow } from './styles/layout';
import { Todo } from './types';

const NameRow = styled(FlexRow)`
  gap: 5px;
`

const NameTile = styled.div`
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
`

const App = () => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [text, setText] = useState<string | undefined>(undefined);

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const expensiveValue = useMemo(() => expensiveCalculation(count), [count]);

  const handleButtonClick = () => {
    setCount(previousCount => previousCount +1)
  }

  const handleAddToDo = () => {
    setTodos(todos => [...todos, {description: text || 'Default Todo', createdAt: Date.now()}])
  }

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <FlexRow>
          {count}
        </FlexRow>
        <FlexRow>
          <button onClick={handleButtonClick}>Increase</button>
        </FlexRow>
        <NameRow>
          {todos.map(todo => (<NameTile>{todo.description}</NameTile>))}
        </NameRow>
        <FlexRow>
          <input type="text" onChange={handleTextChange}/>
          <button onClick={handleAddToDo}>Add Todo</button>
        </FlexRow>
        <FlexRow>
          {expensiveValue}
        </FlexRow>
      </header>
    </div>
  );
}

export default App;
