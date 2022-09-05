import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexRow } from './styles/layout';
import { Todo } from './types'

type TodosProps = {
    todos: Array<Todo>;
    addTodo: (test: string) => void;
}

const NameRow = styled(FlexRow)`
  gap: 5px;
`

const NameTile = styled.div`
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
`

export const Todos:React.FC<TodosProps> = React.memo(({todos, addTodo}) => {

const [text, setText] = useState<string | undefined>(undefined);

const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
  }

  const handleAddToDo = () => {
    addTodo(text || '');
  }

  console.log('Todos are rendering');

  return (  
    <>
        <NameRow>
          {todos.map(todo => (<NameTile key={todo.createdAt}>{todo.description}</NameTile>))}
        </NameRow>
        <FlexRow>
          <input type="text" onChange={handleTextChange}/>
          <button onClick={handleAddToDo}>Add Todo</button>
        </FlexRow>
    </>
  )
})
