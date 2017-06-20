import GistAddForm from "./GistAddForm";
import Gist from "./Gist";
const React = require('react');
const {Component} = React;

var GistBox = React.createClass({
	getInitialState:function(){
		return {gists:[]};
	},
	addGist:function(username){
		var url = `https://api.github.com/users/${username}/gists`;
		console.log(url);
		$.get(url, function(result) {
			 var username = result[0].owner.login;
			 var url = result[0].html_url;
			 var gists = this.state.gists.concat({username,url});

			 this.setState({gists});
		}.bind(this));
	},

	render:function(){
		var newGist = function(gist){
			return <Gist username={gist.username} url={gist.url} />
		};

		return <div>
						<h1>GistBox</h1>
						<GistAddForm onAdd={this.addGist} />
						{this.state.gists.map(newGist)}
						<User name="test" />
						<User name="testqwewq" />
						<User2 name="teste" />
					</div>

	}
});
module.exports = GistBox;
//export default GistBox;