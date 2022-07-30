import ApartmentsList from '../components/ApartmentsList';
import apartmentsListData from '../Data/apartments';

function Home() {
  return (
    <ApartmentsList apartmentsListData = {apartmentsListData} title = 'Find Your Dream Stay'/>
  );
}

export default Home;
