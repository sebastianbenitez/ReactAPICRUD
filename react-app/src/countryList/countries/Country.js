import React from 'react';
import './Country.sass';

const Country = (props) => {
	return(
		<tr>
			<td>
				{props.country.id}
			</td>
			<td>
				{props.country.name}
			</td>
			<td>
				{props.country.id?<button className='btn btn-danger' onClick={()=>{props.deleteCountry(props.id, props.country)}}>Borrar</button>:<i className="fas fa-clock"></i>}
			</td>
		</tr>
	);
}

export default Country;