import React, { Fragment } from 'react'
import Input from '../common/InputComponent.jsx';

export default function FirstPageComponent() {
	return (
		<Fragment>
			<div className="input-container">
				<Input type="text" name="username" label="User Name" placeholder="User Name" />
			</div>
			<div className="input-container">
				<Input type="email" name="emial" label="Email" placeholder="Email" />
			</div>
			<div className="input-container">
				<Input type="password" name="password" label="Password" placeholder="Password" />
			</div>
		</Fragment>
	)
}
