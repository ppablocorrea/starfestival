import React from "react";

export default class Menu extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <a class="navbar-brand ps-5" href="/"><i class="bi bi-stars"></i><b> Star Festival</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ps-4">
                    <a class="nav-item nav-link" href="/shows">Shows</a>
                    <a class="nav-item nav-link" href="/tickets">Tickets</a>
                    <a class="nav-item nav-link" href="/lanzamientos">Lanzamientos</a>
                    <a class="nav-item nav-link" href="/sponsors">Sponsors</a>
                    <a class="nav-item nav-link" href="/contacto">Contacto</a>
                </div>
                </div>
            </nav>
        )
    }
}
