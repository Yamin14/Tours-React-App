
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import 'bootstrap/dist/css/bootstrap.css';
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //fetch
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);

    } catch (err) {console.log("Error"); setLoading(false);}
  };

  useEffect(() => {
    fetchTours();
  }, []); //call it once on render

  //page refresh
  const refreshPage = () => {
    //window.location.reload();
    fetchTours();
  }

  //remove tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //if loading
  if (loading) {
    return (<main>
      <Loading />
    </main>);
  }

  //if empty
  if (tours.length == 0) {
    return (
       <main className='text-center'>
         <h2 className='mt-2'>No Tours Left</h2>
         <button className='btn btn-primary' onClick={refreshPage}>Refresh</button>
       </main>
    );
  }

  //if loaded
  return (
    <main>
      <h1 className='text-center mt-2'>Our Tours</h1>
      <div id='borderDiv' className='text-center border-primary border-bottom border-2 rounded-circle'></div>

      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
