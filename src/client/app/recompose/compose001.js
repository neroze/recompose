import React from 'react';
import {
    compose,
    setDisplayName,
    setPropTypes,
    withState,
    withHandlers
} from 'recompose'
const {Component} = React;

const StatusList = () =>
  <div className="tooltip StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const Status = withState('listShow', 'setListVisiable', false)(
	({status, listShow, setListVisiable}) =>
		<span onClick={()=> setListVisiable((listShow) => !listShow) } >
		{status}
		{listShow && <StatusList />}
		</span>
	)

const Tooltip = withState('tooltipShow','setTooltipVisiable', false)(
({text, toolTipText, tooltipShow, setTooltipVisiable }) =>
	<span>
		{tooltipShow && <div className="tooltip"> {toolTipText}</div> }
		<span className="textHover"
			onMouseEnter={ ()=>setTooltipVisiable(true) }
			onMouseLeave={ ()=>setTooltipVisiable(false	) }
		>{ text }</span>
	</span>
);


// same stuff with with handlers HOC
const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => (e) => toggle(true),
    hide: ({ toggle }) => (e) => toggle(false),
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)


const StatusTow = withToggle(
	({status, toggledOn, toggle}) =>
		<span onClick={()=> toggle((listShow) => !listShow) } >
		{status}
		{toggledOn && <StatusList />}
		</span>
	)


const TooltipTow = withToggle(
({text, toolTipText, toggledOn, show, hide }) =>
	<span>
		{tooltipShow && <div className="tooltip"> {toolTipText}</div> }
		<span className="textHover"
			onMouseEnter={ show }
			onMouseLeave={ hide }
		>{ text }</span>
	</span>
);

const App = () =>
	<div className="app">
		<Status status="click to Hide status"/>
		<Tooltip text="Hover over to see tooltip" toolTipText="This is awesome superman tooltip" />
		<br />
		<hr />
		<br />
		<Status status="click to Hide status"/>
		<Tooltip text="Hover over to see tooltip" toolTipText="This is awesome superman tooltip" />
	</div>
export default App;