import { Navbar, Hero, Trending, Explore, TopCreator, Footer } from './components'
function App() {
  return (
    <div className="bg-[#000]">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="hidden lg:flex absolute gradient-04 z-0" />
        <Trending />
      </div>
      <div className="relative">
      <Explore />
        <div className="hidden lg:flex absolute gradient-02 z-0" />
      </div>
      <div className="relative">
      <TopCreator />
        <div className="hidden lg:flex absolute gradient-03 z-0"/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
