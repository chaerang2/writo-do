import React, {useState} from 'react'
import classNames from "classnames";
import deleteImg from './css/imgs/delete_black_24dp.svg'

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
      <div className='storage_entry'>
        <button className={classNames('right_arrow',{down_arrow:list})} onClick={commentToggle}></button>
        <p className='storage_text'>{storage.text}</p>
        <img className={classNames('trash_img',{storage_delete:trash})} src={deleteImg} onClick={()=>storageDel(storage.id)}></img>
      </div>
      <div className={classNames('hidden_comment',{view_list:list})}>
        <form onSubmit={commentSubmit} className='comment_form'>
          <input value={comment} onChange={commentOnChange} className='comment_input'></input>
          <button type="submit" className='comment_btn'></button>
        </form>
        <ul>
          {storage.comment.map(comm=>(
            <li className='comment_list' onMouseOver={commTrashToggle} onMouseOut={commTrashToggle}>
              <span className='comment_text'>{comm.text}</span>
              <img className={classNames('trash_img',{comm_delete:commTrash})} src={deleteImg} onClick={()=>commDel(storage.id,comm.commId)}></img>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Storage
