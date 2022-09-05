import React, { useCallback, useState } from 'react';
import './App.css';
import { FlexRow } from './styles/layout';
import { Todos } from './Todos';
import { Todo } from './types';

const App = () => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleButtonClick = () => {
    setCount(previousCount => previousCount +1)
  }

  const handleAddToDo = useCallback((text: string) => {
    setTodos(todos => [...todos, {description: text || 'Default Todo', createdAt: Date.now()}])
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <FlexRow>
          {count}
        </FlexRow>
        <FlexRow>
          <button onClick={handleButtonClick}>Increase</button>
        </FlexRow>
        <Todos todos={todos} addTodo={handleAddToDo}/>
      </header>
    </div>
  );
}

export default App;
