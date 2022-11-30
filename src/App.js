import { Navbar, Hero, Trending, Explore, TopCreator, Footer } from './components'
function App() {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      {/* <div className="relative"> */}
        {/* <div className="gradient-03" /> */}
        <Trending />
      {/* </div> */}
      {/* <div className="relative"> */}
      <Explore />
        {/* <div className="gradient-02 z-0" /> */}
      <TopCreator />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
