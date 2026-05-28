import { FormControl, FormControlLabel, Switch, Typography } from "@mui/material";
import { useState } from "react";

function SwitchButton(){
  const [dark,setDark] = useState(false)

  return(
    <>
    <div style={{backgroundColor:dark?"black" : "white" , height:"100vh", width:"100vw"}}>
    <FormControlLabel control={<Switch  onClick={() => setDark(!dark)}/>}  sx={{color: dark ? "white" : "black"}} label="Dark Mode"> 
    </FormControlLabel>
    <Typography sx={{color: dark ? "white" : "black"}}>
      {dark ? "On" : "Off"}
    </Typography>
    </div>
    </>
  )
}

export default SwitchButton