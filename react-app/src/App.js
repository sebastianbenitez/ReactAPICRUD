import React from 'react';
import './App.css';
import CountryList from './countryList/CountryList';

class App extends React.Component {

	state = { 
		countries: [
		  {
		  	'id':0,
		  	'name': 'Cargando Paises'
		  }
		]
	};

	handleDeleteCountry = async (index, country) => {

		const remainingCountries = this.state.countries;
		remainingCountries.splice(index, 1);

		this.setState({countries: remainingCountries});
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:5000/api/country/');
		const json = await response.json();

		//let countriesJson = json.map(c => c.name);
		this.setState({countries: json});
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
