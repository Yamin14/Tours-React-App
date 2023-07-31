
import Tour from './Tour';

function Tours (props) {

	const tours = props.tours;

	//tours list
	const list = tours.map((tour, index) => {
		return <Tour key={tour.id} {...tour} removeTour={props.removeTour}/>;
	});

	//return
	return (
		<>
			{list}
		</>
	);
}

export default Tours;