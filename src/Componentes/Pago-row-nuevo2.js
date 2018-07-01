import React from 'react';
import SelectNuevo2 from './SelectNuevo2';

class PagoRowNuevo2 extends React.Component {
  constructor(props) {
    super(props);
    this.OpcionSeleccionada= this.OpcionSeleccionada.bind(this);
    this.state = {
      
    };
  }
  OpcionSeleccionada(opcion) {

    if(opcion != null){
    console.log("opcion seleccionada");
    //console.log(opcion);
    var listadoRec = { 
      "idAlumno" : this.props.pago.idAlum,
      "codAlumno" :opcion.codAlumno,
      "idPrograma":opcion.idPrograma
      }
    console.log(listadoRec);
    }
    this.props.Opcion(listadoRec);
  }
  render() {
    return(
    <tr>
      <td className="td1">{this.props.pago.apeNom}</td>
      <td className="td1">{this.props.pago.idAlum}</td>
      <td className="td1">{this.props.pago.codigo}</td>
      <td className="td1">{this.props.pago.idFacultad}</td>
      <td className="td1"><SelectNuevo2 Opcion={this.OpcionSeleccionada} nombre={this.props.pago.apeNom} listado = {this.props.pago.codigos}/></td>
	</tr>
    )
  }
}
//
//

//<td className="td">{this.props.pago.concepto}</td>
//<td className="td">{this.props.pago.facultad}</td>
//<td className="td">{this.props.pago.idRec}</td>

//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default PagoRowNuevo2;