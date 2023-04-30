import React from "react";

export default class SponsorsPagina extends React.Component{
    render(){
        return(
            <>
                <div class="row py-5 ">
                    <div class="col-12 text-center">
                        <h3> <b> Nuestros auspiciantes son: </b> </h3>
                    </div>
                </div>
                <div class="row pt-3 pb-5">
                    <div id="proyecto-beauty" class="col-6 text-center">
                        <h4><b>Beauty</b></h4>
                        <p class="pt-2">Empresa de belleza para Eventos</p>
                    </div>
                    <div id="proyecto-clothes" class="col-6 text-center">
                        <h4><b>Clothes</b></h4>
                        <p class="pt-2">Empresa de Ropa Internacional</p>
                    </div>
                </div>
            
            
            </>
        )
    }
}