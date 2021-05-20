import React, { Fragment } from 'react'

export default function InputComponent( {label='' ,type='' ,placeholder='',name=''} ) {
	return (
		<Fragment>
			<label>
				{`${label}:`}
                 <input type={type} name={name} placeholder={placeholder} />
			</label>
		</Fragment>
	)
}
