import React from 'react';
import {
    compose,
    setDisplayName,
    setPropTypes,
    withState,
    withHandlers,
    lifecycle
} from 'recompose'
const {Component} = React;

const configPromise = fetchConfiguration();

const withConfig = lifecycle({
	getInitialState() {
		return { config: {} }
	}
	,componentDidMount() {
	    configPromise.then(config => {
	    	console.log(config);
	    	this.setState({
	    		config
	    	})
	    }
	  )
	}
})

const StatusList = () =>
  <div className="tooltip StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const Status = withConfig(({config}) =>
		<span  >
			{console.log("Config : ",config)}
			{console.log(config)}

		</span>
	);


// const Tooltip = withState('tooltipShow','setTooltipVisiable', false)(
// ({text, toolTipText, tooltipShow, setTooltipVisiable }) =>
// 	<span>
// 		{tooltipShow && <div className="tooltip"> {toolTipText}</div> }
// 		<span className="textHover"
// 			onMouseEnter={ ()=>setTooltipVisiable(true) }
// 			onMouseLeave={ ()=>setTooltipVisiable(false	) }
// 		>{ text }</span>
// 	</span>
// );

// mock configuration

const config = {
	status: "Super Man",
	listShow: false
}

function fetchConfiguration(){
	return new Promise((resolve) => {
		setTimeout(() => resolve(config), 300 );
	})
}

const setListVisiable = () => {
		alert(3)
}

const App = () =>
	<div className="app">
		<Status />
		<br />
		<hr />
	</div>
export default App;