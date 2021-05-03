import React, {useState} from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import TodoContainer from "./container/TodoContainer"
function App() {
  const [menu, setMenu] = useState('todo')
  const menuClick = e =>{
    setMenu(e.target.name)
  }
  return (
    <>
    <Header />
    <Menu menu={menu} menuClick={menuClick} />
    <TodoContainer />
    </>
  );
}
export default App;
