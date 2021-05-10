import React from 'react';
import css from './css/Header.module.css'
function Header(){

return(
<header className={css.header}>
  <h1 className={css.title}>writo-do</h1>
  <h3 className={css.sub_title}>창작자들의 기억저장소</h3>
</header>
)
}

export default Header;