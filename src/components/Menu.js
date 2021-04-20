import React, {useState} from "react";

function Menu(){
  const [menu,setMenu] = useState('todo')
  const changeBtn = function(e){
    setMenu(e.target.name)
  }
  return(
    <nav>
      <button className="menuBtn" name="todo" onClick={changeBtn}>할 일</button>
      <button className="menuBtn" name="storage" onClick={changeBtn}>저장소</button>
    </nav>
  )
}

export default Menu;