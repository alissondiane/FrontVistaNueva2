import React from 'react'
import TableHeaderAlumnoAP from './TableHeader-AlumnoAP'
import AlumnoAPList from './Alumno-AP-List'
import ALUMNOAP from './AlumnoAP-Data'
import '../App.css';
import {browserHistory} from 'react-router-3';

class VistaTablaNueva extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehiculos: []
    }
    this.Regresar = this.Regresar.bind(this);

  }

  componentWillMount() {
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-jdbc-client/alumno/alumnoprograma/programa/listar')
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
      this.setState({ vehiculos: alumno})
      
      console.log(alumno)
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
  }
  Regresar=(e)=>{
    
    browserHistory.push('/');
    e.preventDefault();
    
  }

  render() {
      return (
        <div className="">
              <h3>Tabla Alumno-AlumnoPrograma
              <ul id="nav-mobile" class="right  hide-on-med-and-down">
              <li ><a className="seleccionar" onClick={this.Regresar} >Regresar<i className="material-icons right">reply</i></a></li>
          </ul>
              </h3>
            
          <hr />

        <div className="row center-xs centrar">
            <div className="center-xs-12 margin_top ">
                <AlumnoAPList listado={this.state.vehiculos} />
            </div>
        </div>
          <footer>
            <div className="row center-xs centrar color">
            Realizado por Hardcode © 2018 
            </div>
            </footer>

        </div>
      )
    }
   
}



export default VistaTablaNueva;