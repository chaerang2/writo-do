import classNames from "classnames";
import React from "react";
import css from './css/Menu.module.css'

function Menu({menu, menuClick}){
return(
<nav className={css.nav}>
  <div className={css.btnbox}>
    <button className={classNames(css.menuBtn, {[css.selectMenu]:menu==='todo'})} name="todo" onClick={menuClick}>할 일</button>
    <button className={classNames(css.menuBtn, {[css.selectMenu]:menu==='storage'})} name="storage" onClick={menuClick}>저장소</button>
  </div>
</nav>
)
}

export default Menu;