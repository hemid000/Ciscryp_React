import Discover from "./Components/Home/Section1/Discover";
import Countdown_timer from "./Components/Home/Section2/Countdown_timer";
import Creators from "./Components/Home/Section5/Creators";
import DataSearching from "./Components/Home/Section3/DataSearching";
import PremiumLogin from "./Components/Home/Section4/PremiumLogin";
import SwiperCollections from "./Components/Home/Section6/SwiperCollections";

function App() {
  return (
    <main>
      <Discover />
      <Countdown_timer />
      <DataSearching />
      <PremiumLogin />
      <Creators />
      <SwiperCollections />
    </main>
  );
}

export default App;
