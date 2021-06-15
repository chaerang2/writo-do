import classNames from "classnames";
import React from "react";
import './css/root.css'

function Menu({menu, menuClick}){
return(
<nav>
  <div className='menu_btnbox'>
    <button className={classNames('menuBtn', {['selectMenu']:menu==='todo'})} name="todo" onClick={menuClick}>할 일</button>
    <button className={classNames('menuBtn', {['selectMenu']:menu==='storage'})} name="storage" onClick={menuClick}>저장소</button>
  </div>
</nav>
)
}

export default Menu;