import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coinAmount, setCoinAmount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isViewingSelected, setIsViewingSelected] = useState(false);

  const handleAddCoins = () => {
    setCoinAmount(prevAmount => prevAmount + 5000000);
  };

  const toggleView = () => {
    setIsViewingSelected(!isViewingSelected);
  };

  const addPlayer = (player) => {
    const playerPrice = parseInt(player.price.replace(/[$,]/g, ''));

    if (coinAmount < playerPrice) {
      toast.warning('Not enough coins to select this player!', {
        position: "top-center",
        autoClose: 2000,
      });
      return; 
    }

    const isAlreadySelected = selectedPlayers.some(selected => selected.id === player.id);

    if (isAlreadySelected) {
      toast.warning('Player already selected!', {
        position: "top-center",
        autoClose: 2000,
      });
      return; 
    } 

    if (selectedPlayers.length >= 6) {
      toast.warning('You can only select a maximum of 6 players!', {
        position: "top-center",
        autoClose: 2000,
      });
      return; 
    }

    setCoinAmount(prevAmount => prevAmount - playerPrice);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const removePlayer = (id) => {
    const playerToRemove = selectedPlayers.find(player => player.id === id);
    if (playerToRemove) {
      const playerPrice = parseInt(playerToRemove.price.replace(/[$,]/g, ''));
      setCoinAmount(prevAmount => prevAmount + playerPrice);
    }
    
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
  };

  return (
    <>
      <Header coinAmount={coinAmount} />
      <Banner onClaimFreeCredit={handleAddCoins} />
      <div className="w-11/12 mx-auto flex justify-between mt-8 sticky top-14 backdrop-blur-sm">
        <div></div>
        <div>
        <button 
          className={`p-2 ${isViewingSelected ? 'bg-white' : 'bg-yellow-300'} rounded-lg`}
          onClick={() => setIsViewingSelected(false)}
        >
          Available
        </button>
        <button 
          className={`p-2 ${isViewingSelected ? 'bg-yellow-300' : 'bg-white'} rounded-lg`}
          onClick={toggleView}
        >
          Selected ({selectedPlayers.length})
        </button>
        </div>
      </div>
      {isViewingSelected ? (
        <div>
          {/* Display selected players */}
          <h1 className='w-11/12 mx-auto font-bold text-2xl mb-4' >Selected players</h1>
          <div className="w-11/12 mx-auto">
            {selectedPlayers.map(player => (
              <div key={player.id} className="border-2 p-4 rounded-xl flex justify-between ">
                <div className='flex gap-6'>
                <img className="w-32 h-24 rounded-xl" src={player.cover} alt="" />
                <div>
                <p className="font-bold mt-4">{player.player_name}</p>
                <p>Country: {player.country}</p>
                <p>Role: {player.role}</p>
                </div>
                </div>
                <button
                  className="bg-red-700 text-white rounded w-20 h-10 mt-7"
                  onClick={() => removePlayer(player.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
         <div className='flex justify-center items-center'>
         <button 
            className="bg-blue-500 text-white p-2 mt-4 rounded" 
            onClick={() => setIsViewingSelected(false)}
          >
            Add More Players
          </button>
         </div>
        </div>
      ) : (
        <Blogs
          selectedPlayers={selectedPlayers}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
        />
      )}
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
