import React, { Fragment } from 'react'
import Input from '../common/InputComponent.jsx';

export default function SecondPageComponent() {
	return (
		<Fragment>
			<div className="input-container">
				<Input type="number" name="age" label="Age" placeholder="Age" />
			</div>

			<div className="input-container">
				<label>
					{`Gender`}
					<input type="radio" id="male" name="age" value="30" />
					<label htmlFor="male">Male</label>
					<input type="radio" id="female" name="age" value="60" />
					<label htmlFor="female">Female</label>
					<input type="radio" id="other" name="age" value="100" />
					<label htmlFor="other">Other</label>
				</label>

			</div>
		</Fragment>
	)
}
