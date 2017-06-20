import React from 'react';
import {
    compose,
    setDisplayName,
    setPropTypes,
    withState,
    withHandlers,
    lifecycle,
    mapProps
} from 'recompose'
const {Component} = React;

const users = [
	{name: 'Time', status: 'active'}
	,{name: 'BOb', status: 'pending'}
	,{name: 'Joe', status: 'active'}
	,{name: 'jim', status: 'inactive'}
]

const User = ({name, status}) =>
	<div> {name} -- {status}</div>

const UserList = ({users, status}) =>
	<div className="UserList">
		<h3>{status}</h3>
		{ users && users.map((user) => <User {...user} />)}
	</div>


const filterByStatus = (status) => mapProps(
	({user}) => ({
		status,
		users: users.filter(u => u.status === status)
	})
)

const ActiveUser = filterByStatus('active')(UserList);
const InactiveUser = filterByStatus('inactive')(UserList);
const PendingUser = filterByStatus('pending')(UserList);



const App = () =>
	<div className="app">
		<ActiveUser users={users} />
		<InactiveUser users={users} />
		<PendingUser users={users} />
		<hr />
	</div>

export default App;