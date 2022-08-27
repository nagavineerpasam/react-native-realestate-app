import { useEffect } from 'react';
import * as Updates from 'expo-updates';
import ApartmentsList from '../components/ApartmentsList';
import apartmentsListData from '../Data/apartments';

function Home() {
  // const [isUpdate, setUpdate] = useState(false);
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          // ... notify user of update ...
          await Updates.reloadAsync();
        }
      } catch (e) {
        // handle or log error
      }
    };
    checkForUpdates();
  }, []);
  return (
    <ApartmentsList apartmentsListData = {apartmentsListData} title = 'Find Stay!'/>
  );
}

export default Home;
