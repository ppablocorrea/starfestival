import React from "react";

export default class Artista extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div class="col-12 col-md-4 text-center pb-5">
                <h3 class={this.props.clase}><b>{this.props.nombre}</b></h3> 
                <h6>Horario de Actuación</h6>
                <p>{this.props.horario}</p>
                <button type="button" class="btn btn-dark btn"> <a class="text-decoration-none text-white" target="_blank" href={this.props.link}>Ver Sitio Oficial</a> </button>   
            </div>   
        )
    }
}