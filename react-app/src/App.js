import React from 'react';
import axios from 'axios';
import './App.css';
import CountryList from './countryList/CountryList';
import FormCountry from './formCountry/FormCountry';

class App extends React.Component {

	state = { 
		countries: [
		  {
		  	'id':'',
		  	'name': 'Cargando Paises'
		  }
		]
	};

	getAllCountries = () => {
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

	handleDeleteCountry = (index, country) => {
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

	handlePostCountry = country => {
		console.log(country);
		axios.post('http://localhost:5000/api/country/', {data: country})
		.then( res => {
			alert(res.data);
		})
		.then(this.getAllCountries)
		.catch(err=>{
			alert('Ocurrio un error en la base de datos');
			console.log(err);
		});
	}

	componentDidMount() {
		this.getAllCountries();
	}

	render() {
		return (
			<div className="card text-center">
				<div className="card-body">
					<CountryList 
						countries={this.state.countries}
						deleteCountry={this.handleDeleteCountry}/>
				</div>
				<div className="card-footer text-muted">
					<FormCountry onFormSubmit={this.handlePostCountry}/>
				</div>
			</div>
		);	
	}
}

export default App;
