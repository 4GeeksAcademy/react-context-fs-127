export const initialStore=()=>{
  return{
   contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_new_contact':

      const contact = action.payload

      return {
        ...store,
        contacts: [...store.contacts,contact]
      };
      // FALTARIA ACTION DE EDITAR Y DE ELIMINAR
    default:
      throw Error('Unknown action.');
  }    
}
