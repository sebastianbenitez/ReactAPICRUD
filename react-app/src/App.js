import React from 'react';
import axios from 'axios';
import './App.css';
import CountryList from './countryList/CountryList';

class App extends React.Component {

	state = { 
		countries: [
		  {
		  	'id':'',
		  	'name': 'Cargando Paises'
		  }
		]
	};

	handleDeleteCountry = async (index, country) => {
		axios.delete('http://localhost:5000/api/country/',{data: country})
		.then(res => {
			alert(res.data);
			
			const remainingCountries = this.state.countries;
			remainingCountries.splice(index, 1);

			this.setState({countries: remainingCountries});
		})
		.catch(err=>{
			alert('Ocurrio un error en la base de datos');
			console.log(err);
		});
	}

	async componentDidMount() {
		axios.get('http://localhost:5000/api/country/')
		.then(res => {
			const countriesJson = res.data;
			this.setState({countries: countriesJson});
		})
		.catch(err => {
			this.setState({ 
				countries: [
				  {
				  	'id':'',
				  	'name': 'Ocurrio un error en la base de datos'
				  }
				]
			});
			console.log(err);
		});

	}
	render() {
		return (
			<div className="card text-center">
				<div className="card-body">
					<CountryList 
						countries={this.state.countries}
						deleteCountry={this.handleDeleteCountry}/>
				</div>
			</div>
		);	
	}
}

export default App;
