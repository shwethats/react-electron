import React from 'react'

export default function UserDetailsComponent( { userInfo = {} } ) {
	return (
		<div>
			{
				Object.keys( userInfo ) && Object.keys( userInfo ).length > 0 &&
				Object.keys( userInfo ).map( ( element, key ) => {

					return (
						<div className="user-details">
							<label className="user-details-header">{element}:</label>
							<p>{userInfo[ element ]}</p>
						</div>
					)
				} )
			}
		</div>
	)
}
