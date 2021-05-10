import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StorageContents from '../components/StorageContents';
import {storageNew, storageDelete, storageComment,storageCommentDel} from '../modules/storages';

const StorageContainer = () => {
const storages = useSelector(state => state);
const dispatch = useDispatch();

const storageCreate = text => dispatch(storageNew(text));
const storageDel = id => dispatch(storageDelete(id));
const commCreate = (id,text) => dispatch(storageComment(id,text));
const commDel = (id,commid) => dispatch(storageCommentDel(id,commid));

return <StorageContents storages={storages.storages} storageCreate={storageCreate} storageDel={storageDel} commCreate={commCreate} commDel={commDel} />
}

export default StorageContainer