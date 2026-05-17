import TextInput from './TextInput'
import Clearbutton from './Clearbutton'
import Submit from './Submit'

function Form(){

  
  function enableSubmit(){
    let uname = document.getElementById("uname").value;
    let uemail = document.getElementById("uemail").value;
    let upass = document.getElementById("upass").value;
    
    if (uname !== "" && uemail !== "" && upass !== ""){
      document.getElementById("sub").disabled = false;
    }else{
      document.getElementById("sub").disabled = true;
    }
  }

  function subclick(event){
    event.preventDefault();
    document.getElementById("h1").hidden = false;
    let uname = document.getElementById("uname").value;
    let uemail = document.getElementById("uemail").value;
    let upass = document.getElementById("upass").value;
    document.getElementById("h3").innerHTML = `Name : ${uname} <br> E-mail : ${uemail} <br> Password : ${upass}`;
  }

  return (
    <>
    <form onSubmit={subclick}>
    <TextInput type="text" labelname="Name : " fun={enableSubmit} id = "uname"/>
    <br></br>
    <br></br>
    <TextInput type="email" labelname="E-mail : " fun={enableSubmit} id = "uemail"/>
    <br></br>
    <br></br>
    <TextInput type="password" labelname="Password : " fun={enableSubmit} id = "upass"/>
    <br></br>
    <br></br>
    <Submit id="sub"/>
    <Clearbutton/>
    </form> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 id='h1' hidden>Preview</h1>
    <h3 id='h3'></h3>
    
    </>
  )
}

export default Form;