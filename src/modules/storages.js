const STORAGE_NEW = 'STORAGE_NEW';
const STORAGE_DELETE = 'STORAGE_DELETE';
const STORAGE_COMMENT = 'STORAGE_COMMENT';
const STORAGE_COMMENT_DEL = 'STORAGE_COMMENT_DEL'



let storageId = 1;
let commentId = 1;
export const storageNew = text =>({
  type:STORAGE_NEW,
  storage:{
    id:storageId++,
    text,
    comment:[]
  }
})

export const storageDelete = id =>({
  type:STORAGE_DELETE,
  id
})

export const storageComment = (id,text) =>({
  type:STORAGE_COMMENT,
  id,
  comment:{
    commId:commentId++,
    text
  }
})
export const storageCommentDel = (id,commid) =>({
  type:STORAGE_COMMENT_DEL,
  id,
  commid
})

const initialState = [];

export default function storages(state=initialState, action){
  switch(action.type){
    case STORAGE_NEW:
      return state.concat(action.storage);
      case STORAGE_DELETE:
        return state.filter(
          storage=>storage.id !== action.id
        )
        case STORAGE_COMMENT:
          return state.map(
            storage=>storage.id === action.id
            ? {...storage,comment:storage.comment.concat(action.comment)}
            : storage
          )
          case STORAGE_COMMENT_DEL:
            return state.map(
              storage=>storage.id === action.id
              ? {...storage, comment:storage.comment.filter(
                comm=>comm.commId!==action.commid
              )}
              : storage
            )
            default :return state

  }
}
