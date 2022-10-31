import { useEffect } from 'react';
import * as C from './App.styled';
import { useTodo } from './reducers/todoReducer';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { writeLocalStorage } from './localStorage/storage';

const App = () => {
  const [list, dispatch] = useTodo();

  useEffect(() => {
    writeLocalStorage(list)
  }, [list]);

  const handleAddTask = (taskName: string) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        name: taskName
      }
    });
  }

  const handleDoneOrDel = (type: string,id: string) => {
    dispatch({
      type,
      payload: { id }
    });
  }

  return (
    <C.Container>
      <div className="area">
        <h1>Lista de Tarefas</h1>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} data={item} onClicked={handleDoneOrDel} />
        ))}
      </div>
    </C.Container>
  );
}

export default App;