import React from "react";

export default class PiePagina extends React.Component{
    render(){
        return(
            <footer className="text-light bg-dark pt-3 fixed-bottom">
                <div className="container-fluid">
                    <div class="row text-center">
                        <div class="col-12">
                            <p><b>Copyright © Star Festival 2023. Todos los derechos reservados</b></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}