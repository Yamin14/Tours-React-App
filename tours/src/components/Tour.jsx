
import {useState} from 'react';

function Tour ( { id, name, price, image, info, removeTour} ) {

	const [readMore, setReadMore] = useState(false);

	 return (
	 	<>
	 		<article className='border border-secondary border-2 my-3 p-1'>
	 			<img src={image} />

	 			<footer>

	 				<div className='head px-1'>
		 			<h5 className='py-1 border-bottom border-dark'>{name}</h5>
		 			<h6 className='border border-info bg-info text-dark p-1 rounded'>Price: ${price}</h6>
		 			</div>

		 			<p className='p-1'>
		 				{readMore ? info: `${info.substring(0, 200)}...`}
		 				&nbsp;<button className='readMoreBtn' onClick={() => setReadMore(!readMore)}>
		 					{readMore ? "show less": "show more"}
		 				</button>
		 			</p>

		 			<div className='text-center mb-2'>
			 			<button className='border-danger text-danger bg-dark' onClick={() => removeTour(id)}>
			 				Not Interested
			 			</button>
		 			</div>

	 			</footer>
	 		</article>
	 	</>);
}

export default Tour;
