import React from 'react';
import './Country.sass';

const Country = (props) => {
	return(
		<div className="country row">
			<div className="col-3">
				{props.country.id}
			</div>
			<div className="col-6">
				{props.country.name}
			</div>
			<div className="col-3">
				<button onClick={()=>{props.deleteCountry(props.id, props.country)}}>Borrar</button>
			</div>
		</div>
	);
}

export default Country;