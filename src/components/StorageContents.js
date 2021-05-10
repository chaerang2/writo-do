import React,{useState} from 'react'
import StorageList from './StorageList'

const Storage = ({storages,storageCreate, storageDel, commCreate, commDel}) => {
  const [text, setText] = useState('')
  const StorageOnChange = e =>setText(e.target.value)
  
  const onSubmit = e =>{
    e.preventDefault();
    storageCreate(text)
    setText('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={StorageOnChange}></input>
        <button type="submit">등록</button>
      </form>
      {
        storages.length === 0 ? <div>저장소가 비어있어요.</div> : <StorageList storages={storages} storageDel={storageDel} commCreate={commCreate} commDel={commDel} />
      }
    </div>
  )
}

export default Storage
