import React from "react";

export default class ContactoPagina extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changedName = this.changedName.bind(this);
        this.changedEmail = this.changedEmail.bind(this);
    }

    submitted(Event){
        alert("Se realizó la suscripción de " + this.state.nombre + " con el email: " + this.state.email);
        Event.preventDefault();
        Event.target.reset();
    }

    changedName(Event){
        this.setState({
            nombre: Event.target.value
        })
    }

    changedEmail(Event){
        this.setState({
            email: Event.target.value
        })
    }

    render(){
        return(
            <>
                <div class="row pt-5 text-center">
                    <div class="col-12">
                        <h3> <b> Star Crew </b> </h3>
                    </div>
                </div>
                <div class="row text-center pt-2">
                    <div class="col-12">
                        <h5>¿Quieres ser el primero en enterarte de las novedades del festival? ¡Suscríbete ahora!</h5>
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="col-md-4">

                    </div>
                    <div class="col-12 col-md-4 pb-3">
                        <form onSubmit={this.submitted}>
                            <div class="form-group">
                                <input onChange={this.changedName} type="text" class="form-control" placeholder="Ingresa tu nombre"/>
                            </div>
                            <div class="form-group py-3">
                                <input onChange={this.changedEmail} type="text" class="form-control" placeholder="Ingresa tu email"/>
                            </div>
                            <div class="form-group text-center py-3">
                                <button type="submit" class="btn btn-dark">Recibir Novedades</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                        
                    </div>
                </div>
            </>
        )
    }
}