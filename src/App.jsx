import Header from './components/Header';
import BottomNav from './components/BottomNav';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-xl relative overflow-hidden">
      {/* max-w-md to simulate mobile view on desktop */}
      <Header />
      <NewsList />
      <BottomNav />
    </div>
  );
}

export default App;
