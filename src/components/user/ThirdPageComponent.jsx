import React, { Fragment } from 'react'
import Input from '../common/InputComponent.jsx';

export default function ThirdPageComponent() {
	return (
		<Fragment>
			<div className="input-container">
				<Input type="tel" name="phone" label="Phone" placeholder="phone" pattern="[+]{1}[0-9]{2}-[0-9]{10}" />
			</div>
			<div className="input-container">
				<Input type="textarea" name="address" label="address" placeholder="address" />
			</div>
		</Fragment>
	)
}
