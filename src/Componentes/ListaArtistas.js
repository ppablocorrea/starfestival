import React from "react";
import Artista from "./Artista";

export default class ListaArtisas extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {this.props.artistas.map((artista) => (
                    <Artista nombre={artista.nombre} clase= {artista.clase} horario= {artista.horario} link= {artista.link}/> 
                ))}
    
            </>
        );
    }


}