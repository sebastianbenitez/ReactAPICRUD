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
		<table className='table'>
			<thead>
				<tr>
					<th>#</th>
					<th>Descripcion</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{CountryList}
			</tbody>
		</table>
	);
}

export default CountryList;