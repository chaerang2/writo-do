import React,{useState} from 'react'
import StorageList from './StorageList'
import enterImg from './css/imgs/subdirectory_arrow_left_black_24dp.svg'

const Storage = ({storages,storageCreate, storageDel, commCreate, commDel}) => {
  const [text, setText] = useState('')
  const StorageOnChange = e =>setText(e.target.value)
  
  const onSubmit = e =>{
    e.preventDefault();
    storageCreate(text)
    setText('');
  }
  return (
    <div className='contents_box'>
      <form onSubmit={onSubmit} className='input_form'>
        <input value={text} onChange={StorageOnChange} className='input_box'></input>
        <button type="submit" className='input_btn'><img className='input_img' src={enterImg}></img></button>
      </form>
      {
        storages.length === 0 ? <div className='no_storage'>저장소가 비어있어요.</div> : <StorageList storages={storages} storageDel={storageDel} commCreate={commCreate} commDel={commDel} />
      }
    </div>
  )
}

export default Storage
