import React from "react";

const SECURITY_PASS = 'paradigma'; 

function UseState({ name }) {

  const [state, setState] = React.useState({
    error: false,
    loading: false,
    value: '',
    delete: false,
    confirm: false
  })

  const onConfirm = () => {
    setState({
      ...state,
      error:false,
      loading:false,
      confirm: true
    });
  }
  const onError = () => {
    setState({
      ...state,
      error:true,
      loading: false
    });
  }
  const onCheck = () => {
    setState({
      ...state,
      loading: true})
  }
  const onDelete = () => {
    setState({
      ...state,
      delete:true
    })
  }
  const onNoConfirm = () => {
    setState({
      ...state,
      confirm:false,
      value: ''
    })
  }
  const onRecover = () => {
    setState({
      ...state,
      confirm:false,
      delete: false,
      value: ''
    })
  }
  const onInput = (value) => {
    setState({
      ...state,
      value: value
    })
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
          onInput(event.target.value)
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
        onClick={(onDelete)}
      >Si, eliminar</button>
      <button
        onClick={(onNoConfirm)}
      >No, volver</button>
    </React.Fragment>
  )
 } else {
  return (
    <React.Fragment>
      <h2>Eliminado Use State</h2>
      <button
        onClick={(onRecover)}
      >Recuperar</button>
    </React.Fragment>
  )
 }
}

export {UseState};