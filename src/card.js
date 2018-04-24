import React from 'react';

const Card = (props) => {
	return(
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src={`http://flathash.com/${props.id}`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;