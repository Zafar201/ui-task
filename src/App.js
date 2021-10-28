
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import BestDeals from './Components/BestDeals';
import UrgentSelling from './Components/UrgentSelling';
import Recommedned from './Components/Recommedned';
import FlashSale from './Components/FlashSale';
import SmallBanners from './Components/SmallBanners';
import HotSale from './Components/HotSale';
import RecentlyViewed from './Components/RecentlyViewed';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';
import Apple from './Components/Apple';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <BestDeals/>
       <UrgentSelling/>
       <Recommedned/>
       <FlashSale/>
        <HotSale/>
       <SmallBanners/>
       <RecentlyViewed/>
       <NewsLetter/>
       <Footer/>
       {/* <Apple/> */}
    </div>
  );
}

export default App;
