import React from "react";

export default class LanzamientosPagina extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lanzamientosJustin: [],
            lanzamientosAriana: [],
            lanzamientosBruno: []
        }

    }

    componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/release?artist=e0140a67-e4d1-4f13-8a01-364355bee46e&fmt=json")
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientosJustin: result.releases
            })
        })
        fetch("https://musicbrainz.org/ws/2/release?artist=f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387&fmt=json")
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientosAriana: result.releases
            })
        })
        fetch("https://musicbrainz.org/ws/2/release?artist=afb680f2-b6eb-4cd7-a70b-a63b25c763d5&fmt=json")
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientosBruno: result.releases
            })
        })
    }

    render(){
        return (
            <>
                <div className="row text-center py-5">
                    <div className="col-12 col-md-4">
                        <h3 className="pb-4"><b>Lanzamientos Justin Bieber</b></h3>
                        {this.state.lanzamientosJustin.map((lanzamiento) => (
                            <div className="row text-center">
                                <div className="col-12">
                                    <span>{lanzamiento.title} {lanzamiento.date}</span> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="py-4 py-md-0 pb-md-4"><b>Lanzamientos Ariana Grande</b></h3>
                        {this.state.lanzamientosAriana.map((lanzamiento) => (
                            <div className="row text-center">
                                <div className="col-12">
                                    <span>{lanzamiento.title} {lanzamiento.date}</span> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="py-4 py-md-0 pb-md-4"><b>Lanzamientos Bruno Mars</b></h3>
                        {this.state.lanzamientosBruno.map((lanzamiento) => (
                            <div className="row text-center">
                                <div className="col-12">
                                    <span>{lanzamiento.title} {lanzamiento.date}</span> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}