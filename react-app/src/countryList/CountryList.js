import React from 'react';
import Country from './countries/Country';

const CountryList = (props) => {
	
	const CountryList = props.countries.map((country, i)=>{
		return <Country 
				country={country} 
				key={i} 
				id={i}
				deleteCountry={props.deleteCountry}/>
	});

	return(
		<div className='container'>
			{CountryList}
		</div>
	);
}

export default CountryList;