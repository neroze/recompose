
import React from 'react';

const { Component } = React;
import { compose, lifecycle, branch, renderComponent, withState } from 'recompose';

function fetchData(){
	return new Promise((resolve) => {
		setTimeout(() => resolve({
			name: 'superman ',
			status: 'active'
		}), 300 );
	})
}


const withUserData = lifecycle({
  componentDidMount() {
    fetchData().then( (data) =>
      this.setState( Object.assign({},
      	{loading: false},
      	data
    )) );
  }
})

const Spinner = () =>
  <div className="spinner">
    <div className="loader">Loading...</div>
  </div>

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
)

const enhance = compose(
	withState('loading', () => {} , true),
  withUserData,
  withSpinnerWhileLoading
);

const User = enhance(
  ({name, status}) =>
    <div className="user">{ name }--{ status }</div>
)
const User2 = withUserData(
  ({name, status, lname, loading}) =>
    <div className="user">{ name }--{ status } -- {lname}-- {console.log(loading)}</div>
)

const App = () =>
  <div>
    <h2>helloc I am spinner</h2>
    <User />
    <User2 />
  </div>

export default App;