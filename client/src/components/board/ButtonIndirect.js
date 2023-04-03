import React, {useState} from "react";
import IniretaFilho from './ButtonIndirectChild'

 export default props => {
     const [name, setNome] = useState('?');

    function fornecerInformacoes(nome) {
        setNome(nome);
    }

     return (
         <div>
           <div>
               <span>{name} </span>
           </div>

           <IniretaFilho quandoClicar={fornecerInformacoes}></IniretaFilho>
         </div>
     )
 }