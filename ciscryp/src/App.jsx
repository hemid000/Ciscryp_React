import Discover from "./Components/Home/Section1/Discover";
import Countdown_timer from "./Components/Home/Section2/Countdown_timer";
import Creators from "./Components/Home/Section3/Creators";
import DataSearching from "./Components/Home/Section4/DataSearching";
import PremiumLogin from "./Components/Home/Section5/PremiumLogin";
function App() {
  return (
    <main>
      <Discover />
      <Countdown_timer />
      <Creators />
      <DataSearching />
      <PremiumLogin />
    </main>
  );
}

export default App;
