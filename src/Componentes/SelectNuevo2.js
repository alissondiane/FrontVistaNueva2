import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectNuevo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      SelectedOption: '',
      lista_final:[],
      programa:[]
    }
    this.mostrarNombre=this.mostrarNombre.bind(this);
  }
  componentWillMount() {
    this.mostrarNombre();
  }
  mostrarNombre=()=>{
    console.log(this.props.nombre)
    var listado1=[];
    fetch('https://modulo-alumno-jdbc.herokuapp.com/alumno/alumnoprograma/programa/listar/restringido/'+this.props.nombre)
          .then((response) => {
          return response.json()
          })
          .then((programa) => {
            this.setState({programa: programa});
          })
          .catch(error => {
          console.error(error)
          });
  }


  handleChange = (selectedOption) => {

    if(selectedOption != null){
      this.setState({ SelectedOption: selectedOption});
      var opcionSeleccionada = this.state.programa[selectedOption.value];
      console.log("opcion seleccionada en select")
      console.log(opcionSeleccionada)

      var listadoRec = {
      "codAlumno" :opcionSeleccionada.codAlumno,
      "idPrograma":opcionSeleccionada.idPrograma
      }
      this.props.Opcion(listadoRec);
    }else{
      this.setState({ SelectedOption:''
      });
    }
    

  }

  componentWillReceiveProps(){
    this.setState({ SelectedOption:'',
                    lista_final:[]
      });
  }
 /*  componentDidUpdate(){
    this.setState({
      SelectedOption:''
    });
  } */
  render() {
  
    return (
      <span className="opcion2" id={this.state.SelectedOption.value}/*  onClick={this.mostrarNombre} */>
      <Select    
        class="seleccionable"
        name="form-field-name"
        value={this.state.SelectedOption}
        onChange={this.handleChange}
        options={this.props.listado}
      ></Select>
      </span>
    );
  }
}

export default SelectNuevo2;


/*options={this.state.lista_final}*/