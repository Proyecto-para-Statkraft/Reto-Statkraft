import React from "react";
import Header from "../../Header";
import { Link } from 'react-router-dom';

const ReviewContracts = () => {

    // setGender(event) {
    //     console.log(event.target.value);
    // }


    return (

        <div>
            <Header />
            <div className="d-flex justify-content-center ">
                <div class=" jumbotron col-sm-7">
                    <p class=" text-center">1- El servicio que vas a adquirir es/son</p>
                    <div onChange={'this.setGender.bind(this)'}>
                        <input className="m-2" type="radio" value="bienes" name="gender" /> Bienes <br />
                        <input className="m-2" type="radio" value="transporte" name="gender" /> Trasporte Personal<br />
                        <input className="m-2" type="radio" value="vigilancia" name="gender" /> Vigilancia, limpieza o jardineria y se va a dar en instalaciones de Statkraft <br />
                        <input className="m-2" type="radio" value="personas" name="gender" /> Para que 10 o mas personas realicen un trabajo complementario en Stathraft en contacto directo con personal de Statkraft y permanente en Statkraft <br />
                        <input className="m-2" type="radio" value="construccion" name="gender" /> Solo la construccion de una infraestructura <br />
                        <input className="m-2" type="radio" value="otro" name="gender" /> Otro tipo no descrito antes
                    </div>

                    <Link className="btn btn-primary m-3 " to="/">Siguiente</Link>
                </div>
            </div>

        </div >
    )
}

export default ReviewContracts;
