import React from "react";

const SECURITY_PASS = 'paradigma'; 
const initialState = {
    error: false,
    loading: false,
    value: '',
    delete: false,
    confirm: false
}



const reducer = (state, action) => {
    switch(action.type){
        case 'ERROR':
            return{
                ...state,
                error:true,
                loading: false
            };
        case 'CONFIRM':
            return{
                ...state,
                error:false,
                loading:false,
                confirm: true
            };
        case 'CHECK':
            return{
                ...state,
                loading: true
            };
        case 'DELETE':
            return{
                ...state,
                delete:true
            };
        case 'NOCONFIRM':
            return{
                ...state,
                confirm:false,
                value: ''
            };
        case 'RECOVER':
            return{
                ...state,
                confirm:false,
                delete: false,
                value: ''
            };
        case 'INPUT':
            return{
                ...state,
                value: action.payload
                };
        default:
            return{
                ...state
            }
    }
}

function UseReduce({ name }) {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const onConfirm = () => dispatch({type: 'CONFIRM'})
    const onError = () => dispatch({type: 'ERROR'})
    const onCheck = () => dispatch({type: 'CHECK'})
    const onDelete = () => dispatch({type: 'DELETE'})
    const onNoConfirm = () => dispatch({type: 'NOCONFIRM'})
    const onRecover = () => dispatch({type: 'RECOVER'})
    
    const onInput = (event) => {
        dispatch({type: 'INPUT', payload: event.target.value})
    }

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {

        if (state.value === SECURITY_PASS) {
            onConfirm()
        } else {
            onError()
        } 
      }, 3000);
    }
  }, [state.loading]);
  
  if (!state.delete && !state.confirm){
  return (
    <div>
      <h2>Eliminar {name}</h2> 
      <p>Por favor, escribe el código de seguridad.</p>

      {(state.error && !state.loading) && (
        <p>Error: el código es incorrecto</p>
      )}

      {state.loading && (
        <p>Cargando...</p>
      )}
  
      <input placeholder="Código de seguridad"
        value={state.value}
        onChange= {(event)=> {
            onInput(event)
        }} 
      />
      <button
        onClick={onCheck}>
        Comprobar
      </button>
    </div>
  );
 } else if (state.confirm && !state.delete){
  return (
    <React.Fragment>
      <h2>Eliminar Use State</h2>
      <p>Seguro quieres eliminar UseState?</p>
      <button
        onClick={onDelete}
      >Si, eliminar</button>
      <button
        onClick={onNoConfirm}
      >No, volver</button>
    </React.Fragment>
  )
 } else {
  return (
    <React.Fragment>
      <h2>Eliminado Use State</h2>
      <button
        onClick={onRecover}
      >Recuperar</button>
    </React.Fragment>
  )
 }
}





export {UseReduce};