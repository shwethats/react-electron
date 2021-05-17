
import React, { useState } from 'react';

import _ from 'lodash';

import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'

export default function UserListComponent( { list = [] } ) {

  debugger
  const [ userList, setUserList ] = useState( list );
  const index = list && list.length > 0 ? list[ 0 ].id : null;
  const [ selectIndex, setSelectIndex ] = useState( index );
  const defaultUser = list && list.length > 0 ? list[ 0 ] : {};
  const [ user, setUser ] = useState( defaultUser );


  const handleChange = ( event ) => {

    const search = event.target.value;

    if ( search.length > 0 ) {
      const filterList = list && list.length > 0 && list.filter( ( element, index ) => {
        const flag = element.name.toLowerCase().includes( search.toLowerCase() );
        if ( flag ) {
          return element;
        }
      } );
      setUserList( filterList );
    } else {
      setUserList( list );
    }

  }

  const handleClick = async ( event ) => {
    const id = event.target.id;

    debugger
    if ( !_.isEmpty( id ) ) {
      setSelectIndex( id )
      debugger
      const filterList = list && list.length > 0 && list.filter( ( element, index ) => {
        return element.id === id;
      } );
      await setUser( filterList && filterList.length > 0 && filterList[ 0 ] );

    }
  }

  const handleDelete = () => {
    if ( !_.isEmpty( selectIndex ) ) {
      const filterList = userList && userList.length > 0 && userList.filter( ( element, index ) => {
        return element.id !== selectIndex;
      } );
      setUser( filterList && filterList.length > 0 && filterList[ 0 ] );
      setSelectIndex( filterList && filterList.length > 0 && filterList[ 0 ].id )
      setUserList( filterList );
    }


  }

  return (
    <React.Fragment>

      <div className="header">
        <div className="search-div">
          <input
            type="search"
            id="userSearch"
            name="userSearch"
            className="mainSearch"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>


        <div className="button-div">
          <button type="button" className="delete-btn" onClick={handleDelete}>
            Delete
</button>

        </div>
      </div>
      <hr />
      <div className="flex-container">

        <div className="left-side">

            {
              userList && userList.length > 0 &&
              <ul className="menu">
                {
                  userList && userList.length > 0 && userList.map( ( element, index ) => {
                    return (

                      <li key={element.id}
                        style={{ backgroundColor: element.id === selectIndex ? '#008000' : '' }}>
                        <div id={element.id} onClick={handleClick}>
                          {element.name}
                        </div>
                      </li>
                    )
                  } )
                }
              </ul>
            }


        </div>

        <div className="right-side">
          {
            Object.keys( user ) && Object.keys( user ).length > 0 &&
            Object.keys( user ).map( ( element, key ) => {

              return (
                <div className="user-details">
                  <label>{element}:</label>
                  <p>{user[ element ]}</p>
                </div>
              )
            } )
          }
        </div>
      </div>

      <div class="footer">
        <p></p>
      </div>
    </React.Fragment>

  )
}
