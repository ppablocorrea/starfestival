import React from "react";

export default class SponsorsPagina extends React.Component{
    render(){
        return(
            <>
                <div class="row py-3 ">
                    <div class="col-12 text-center">
                        <h3> <b> Nuestros auspiciantes son: </b> </h3>
                    </div>
                </div>
                <div class="row pt-3 pb-1">
                    <div id="proyecto-beauty" class="col-6 text-center">
                        <div class="card text-white bg-secondary mb-3 pb-3">
                            <div class="card-body">
                                <h5 class="card-title border-bottom border-info">Beauty</h5>
                                <p class="card-text">Transformamos tu belleza natural en algo extraordinario</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        
                    </div>
                </div>
                <div class="row pt-2 pb-1">
                    <div class="col-6">
                        
                    </div>
                    <div id="proyecto-clothes" class="col-6 text-center">
                        <div class="card text-white bg-danger mb-3 pb-3">
                            <div class="card-body">
                                <h5 class="card-title border-bottom">Clothes</h5>
                                <p class="card-text">Ropa única para personas únicas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-2 pb-5">
                    <div id="proyecto-Haven" class="col-6 text-center">
                        <div class="card text-white bg-success mb-3 pb-3">
                            <div class="card-body">
                                <h5 class="card-title border-bottom">Acoustic Haven</h5>
                                <p class="card-text">Creamos experiencias acústicas únicas para eventos corporativos y privados</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        
                    </div>
                </div>
            </>
        )
    }
}