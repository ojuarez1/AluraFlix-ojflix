import { useState } from "react"
import { styled } from '@mui/material/styles';
import { primaryBlue } from "../../components/global";
import {TextValidator} from "react-material-ui-form-validator"
import {validaciones} from "./validaciones.js"


const CssTextField = styled(TextValidator)({
  '& label.Mui-focused': {
    color:'#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
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
  const {tipo = "text", titulo, alto, multiline} = props.label
  const [title, setTitle] = useState({valor:"hola", valid:""})
 
  return <>
    <CssTextField
      type={tipo}
      label={titulo}
      id="custom-css-outlined-input"
      style={{ margin: "1.5rem 0", width: "100%", backgroundColor: "#53585d", borderRadius: "5px"}}
      InputLabelProps={{
          style:{color:"#C2C2C2"}
      }}
      InputProps={{
          style:{height:alto}
      }}
      value={title.valor}
      onChange={(e) => {
        const valida = validaciones(e.target.value)
        setTitle({title:{valor:e.target.value, valid:valida}})
        
      }}
      multiline={multiline}
      maxRows={5}
      //error={title.valor === ""}
      //helperText="Incorrect entry."
       
    />
  </>         
}

export default CampoTexto