import React, { Fragment, useState } from 'react'
import FirstPageComponent from './FirstPageComponent.jsx';
import SecondPageComponent from './SecondPageComponent.jsx';
import ThirdPageComponent from './ThirdPageComponent';

export default function CreateUserComponent( { handleDisplayUser } ) {

	const [ pageCount, setPageCount ] = useState( 1 );

	const handlePrevious = () => {
		setPageCount( pageCount - 1 )
	}

	const handleNext = () => {
		setPageCount( pageCount + 1 )
	}

	const handleSubmit = (event) => {
		alert( "Form is submitted successfully" )
		handleDisplayUser( event );
	}

	return (
		<div className="create-user-form">
			{
				pageCount === 1 &&
				<FirstPageComponent />
			}
			{
				pageCount === 2 &&
				<SecondPageComponent />
			}
			{
				pageCount === 3 &&
				<ThirdPageComponent />
			}
			<div>
				{
					pageCount !== 1 &&

					<button className="btn-previous" onClick={handlePrevious}>Previous</button>
				}
				{
					pageCount !== 3 &&
					<button className="btn-next" onClick={handleNext}>Next</button>
				}
				{
					pageCount === 3 &&
					<button className="btn-next" name="submit" onClick={handleSubmit}>Submit</button>
				}
			</div>


		</div>
	)
}
