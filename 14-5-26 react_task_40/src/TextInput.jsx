function TextInput(props){
  return(
  <>
  <label>{props.labelname}</label>
  <input type={props.type} id={props.id} onChange={props.fun} required/>
  </>
  );
}

export default TextInput;