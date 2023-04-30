import React from "react";

export default class Ticket extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            escondido: true
        }

        this.toggleMostrar = this.toggleMostrar.bind(this);
    }

    toggleMostrar(){
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }
    
    render(){
        return(
            <div class="col-12 col-md-4 text-center pb-4 pb-md-0">
                <div class="card border-info">
                    <div class="card-body">
                        <h5 class="card-title pb-2"><b><i class={this.props.icono}></i> {this.props.titulo}</b></h5>
                        <button className="btn btn-info" onClick={this.toggleMostrar}>Ver Información</button>
                        <p class={"card-text pt-2" + (this.state.escondido ? ' d-none' : '')}>{this.props.descripcion}</p>
                    </div>
                </div>
            </div>
        )
    }
}