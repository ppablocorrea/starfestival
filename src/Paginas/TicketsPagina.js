import React from "react";
import Ticket from '../Ticket';

export default class TicketsPagina extends React.Component{
    render(){
        return(
            <>
                <div class="row py-5 text-center">
                    <div class="col-12">
                        <h3> <b>¡Tickets en Venta!</b> </h3>
                    </div>
                </div>
                <div className='row pb-4'>
                    <Ticket icono="bi bi-star" titulo="Ticket Normal" descripcion="Acceso al campo principal permitiendo ver todos los shows"/>
                    <Ticket icono="bi bi-star-half" titulo="Ticket VIP" descripcion="Podrás acceder a una prenda del Merch Oficial de cada artista + una entrada en zona restringida"/>
                    <Ticket icono="bi bi-star-fill" titulo="Ticket Star" descripcion="Serás capaz de conocer a todos los Artistas personalmente y vivir de cerca sus actuaciones"/>
                </div>  
            </>
        )
    }
}