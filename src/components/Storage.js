import React, {useState} from 'react'
import classNames from "classnames";
import deleteImg from '../css/imgs/delete_black_24dp.svg'

const Storage = ({storage, storageDel, commCreate, commDel}) => {
  const [comment, setComment] = useState('');
  const [trash, setTrash] = useState(false);
  const [commTrash, setCommTrash] = useState(false);
  const [list,setList] = useState(false);
  const trashToggle = () =>{
    setTrash(!trash)
  };
  const commTrashToggle = () =>{
    setCommTrash(!commTrash)
  };
  const commentOnChange = e =>setComment(e.target.value)
  const commentSubmit = e =>{
    e.preventDefault();
    commCreate(storage.id,comment)
    setComment('');
  };
  const commentToggle = () =>{
    setList(!list)
  };
  return (
    <li onMouseOver={trashToggle} onMouseOut={trashToggle}>
      <button className={classNames({down_arrow:list})} onClick={commentToggle}>아래</button>
      <p>{storage.text}</p>
      <img className={classNames({storage_delete:trash})} src={deleteImg} onClick={()=>storageDel(storage.id)}></img>
      <div className={classNames({view_list:list})}>
        <form onSubmit={commentSubmit}>
          <input value={comment} onChange={commentOnChange}></input>
          <button type="submit">등록</button>
        </form>
        <ul>
          {storage.comment.map(comm=>(
            <li>
              <span onMouseOver={commTrashToggle} onMouseOut={commTrashToggle}>{comm.text}</span>
              <img className={classNames({comm_delete:commTrash})} src={deleteImg} onClick={()=>commDel(storage.id,comm.commId)}></img>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Storage
