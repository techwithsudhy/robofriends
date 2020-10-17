import React from 'react';

const Scroll = (props) => {
return (
	<div style={{overflow: 'Scroll',border:'10px solid grey',height:'800px'}}>
	{props.children}
	</div>
	);
};


export default Scroll;