import React, { Children } from "react";
 import  {Botao} from './style'




const MyButton = ({children, ...props})=>{

return < Botao {...props}>{children}</Botao>


}
export default MyButton;