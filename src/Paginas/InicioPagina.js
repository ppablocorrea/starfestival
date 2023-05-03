import React from "react";

export default class InicioPagina extends React.Component{
    render(){
        return(
            <>
                <div id="inicio" class="container-fluid">
                    <div class="row pb-3">
                        <div class="col-12 text-center">
                            <h1 class="text-info"> <b>Bienvenid@ a Star Festival</b> </h1> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3>Vive una experiencia musical única en Star Festival</h3>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-12 text-center">
                            <img width="90%" height="90%" src="/img/festival.jpg" alt="imagen festival star"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}