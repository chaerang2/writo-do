import classNames from "classnames";
import React from "react";

function Menu({menu, menuClick}){
  return(
    <nav>
      <button className={classNames('menuBtn', {selectMenu:menu==='todo'})} name="storage" onClick={menuClick}>저장소</button>
      <button className={classNames('menuBtn', {selectMenu:menu==='storage'})} name="storage" onClick={menuClick}>저장소</button>
    </nav>
  )
}

export default Menu;