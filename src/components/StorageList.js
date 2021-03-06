import React from 'react'
import Storage from './Storage'

const StorageList = ({storages, storageDel, commCreate, commDel}) => {
  return (
    <ul className='storage_list'>
      {storages.map(storage=>(
        <Storage key={storage.id} storage={storage} storageDel={storageDel} commCreate={commCreate} commDel={commDel} />
      ))}
    </ul>
  )
}

export default StorageList
