import React from "react";
import Artista from '../Componentes/Artista';
import ListaArtisas from "../Componentes/ListaArtistas";

export default class ShowsPagina extends React.Component{

    artistas = [
        {
            nombre: "Justin Bieber",
            clase: "text-primary",
            horario: "6:00pm a 7:00pm",
            link:"https://www.justinbiebermusic.com/"
        },
        {
            nombre: "Ariana Grande",
            clase: "text-success",
            horario: "8:00pm a 9:00pm",
            link: "https://www.arianagrande.com/"
        },
        {
            nombre: "Bruno Mars",
            clase: "text-warning",
            horario: "10:00pm a 11:00pm",
            link: "https://www.brunomars.com/"
        }
    ]

    render(){
        return(
            <>
                <div class="row">
                    <div class="col-12 text-center py-5">
                        <h3> <b>¡Conocé el LineUp de artistas 2023!</b> </h3>  
                    </div>
                </div>

                <div class="row">
                    <ListaArtisas artistas={this.artistas} />
                </div>
            </>
        )
    }
}