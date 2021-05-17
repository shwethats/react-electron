import React from 'react'
import '../App.scss';
import userList from '../user.json';

import UserListComponent from './UserListComponent.jsx';


export default function LandingPage( props ) {

	
	return (
		
			<UserListComponent
				list={userList.users}
			/>

		
	)
}
