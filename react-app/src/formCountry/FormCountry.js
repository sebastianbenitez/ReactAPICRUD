import React, { useState, useEffect } from 'react';

function FormCountry({ onFormSubmit }) {

	const [country, setCountry] = useState({'id':'', 'name':''});

	const handlePostCountry = (e) => {
		e.preventDefault();
		if(country.name === '') return;
		onFormSubmit(country);
		setCountry({'id':'', 'name':''});
	}

	useEffect(()=>{
		//document.title = 'Agregando '+country.name;
	});

	return(
		<form onSubmit={handlePostCountry} className='form-row'>
			<span className='col-3'><p className='m-auto'>Agregar un pais: </p></span>
			<input 
				className='form-control col-3'
				type="text"
				value={country.name}
				onChange={(e)=> setCountry({'id': '', 'name':e.target.value})}/>
			<button className='form-control col-1 btn btn-primary'><i className='fas fa-plus'></i></button>
		</form>
	);
}

export default FormCountry;