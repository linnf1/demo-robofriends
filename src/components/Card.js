import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='person' src={`http://flathash.com/${id}`} className='smaller'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;