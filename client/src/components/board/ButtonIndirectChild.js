import React from "react";

 export default props => {

     return (
         <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(event) {
                    props.quandoClicar("João")
                }
            }>Fornecer Informações</button>
         </div>
     )
 }