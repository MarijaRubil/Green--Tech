import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Settings from './settings';

const App = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [bagCount, setBagCount] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBagCountChange = (action) => {
    if (action === 'increment') {
      setBagCount((prevCount) => prevCount + 1);
    } else if (action === 'decrement' && bagCount > 0) {
      setBagCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col rounded-b-3xl bg-gradient-to-b from-green-900 to-green-500 pb-8">
      <div className="flex justify-end ">
        <Link
          to="/Settings"
          className=" text-white p-2 mt-5 mr-5 rounded-xl">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </Link>
        </div>
      
        <div className="flex flex-col items-center justify-center ">
        <label
          htmlFor="profile-image"
          className="flex items-center justify-center rounded-full w-40 h-40 bg-gray-200 overflow-hidden cursor-pointer">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
            
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-gray-400">Välj din maskot</span>
            </div>
          
          )}
      
          <input
            type="file"
            id="profile-image"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />

        </label>
        </div>
      </header>
      <main className="flex-1 bg-white p-4">
        <div className="flex flex-col">
          <div className="mt-4">
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              Skola(Ansvarig lärare):
            </label>
            <input
              type="text"
              id="school"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Namn:
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="bag-count"
              className="block text-sm font-medium text-gray-700"
            >
              Antal påsar:
            </label>
            <div className="flex justify-start items-center mt-1">
              <button
                onClick={() => handleBagCountChange('decrement')}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="px-4 text-gray-700">{bagCount}</span>
              <button
                onClick={() => handleBagCountChange('increment')}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="rounded-2xl p-5  bg-green-900 m-5">
        <nav className="flex justify-between">
          <Link
            to="/karta"
            
            className="flex-1 flex items-center justify-center  text-gray-200 p-2 rounded-lg mr-2"
            > <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"></path><path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"></path></svg>            Karta
          </Link>
          <Link
            to="/klassen"
            className="flex-1 flex items-center justify-center  text-gray-200 p-2 rounded-lg mx-2"
          ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"></path><path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"></path></svg>
            Klassen
          </Link>
          <Link
            to="/beloning"
            className="flex-1 flex items-center justify-center text-gray-200 p-2 rounded-lg ml-2"
          ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,7h-1.209C18.922,6.589,19,6.096,19,5.5C19,3.57,17.43,2,15.5,2c-1.622,0-2.705,1.482-3.404,3.085 C11.407,3.57,10.269,2,8.5,2C6.57,2,5,3.57,5,5.5C5,6.096,5.079,6.589,5.209,7H4C2.897,7,2,7.897,2,9v2c0,1.103,0.897,2,2,2v7 c0,1.103,0.897,2,2,2h5h2h5c1.103,0,2-0.897,2-2v-7c1.103,0,2-0.897,2-2V9C22,7.897,21.103,7,20,7z M15.5,4 C16.327,4,17,4.673,17,5.5C17,7,16.374,7,16,7h-2.478C14.033,5.424,14.775,4,15.5,4z M7,5.5C7,4.673,7.673,4,8.5,4 c0.888,0,1.714,1.525,2.198,3H8C7.626,7,7,7,7,5.5z M4,9h7v2H4V9z M6,20v-7h5v7H6z M18,20h-5v-7h5V20z M13,11V9.085 C13.005,9.057,13.011,9.028,13.017,9H20l0.001,2H13z"></path></svg>
            Belöning
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default App;

