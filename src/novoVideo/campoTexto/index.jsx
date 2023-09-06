import { useState } from "react"
import { styled } from '@mui/material/styles';
import { primaryBlue } from "../../components/global";
import {TextValidator} from "react-material-ui-form-validator"


const CssTextField = styled(TextValidator)({
  '& label.Mui-focused': {
    color:'#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    // '& fieldset': {
    //   borderColor: '#E0E3E7',
    // },
    '&:hover fieldset': {
      borderColor:primaryBlue,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
      },
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
        color:"#fff"
    }
  }
});


const CampoTexto = (props) => {

  const [validar, setValidar] = useState("")
 
  return <>
    <CssTextField
      type="text"
      label={props.label.titulo}
      id="custom-css-outlined-input"
      style={{ margin: "1.5rem 0", width: "100%", backgroundColor: "#53585d", borderRadius: "5px"}}
      InputLabelProps={{
          style:{color:"#C2C2C2"}
      }}
      InputProps={{
          style:{height:props.label.alto}
      }}
      value={validar}
      onChange={(e) => {
        setValidar(e.target.value)
      }}
      //error={validar === ""}
      //helperText="Incorrect entry."
       
    />
  </>         
}

export default CampoTexto