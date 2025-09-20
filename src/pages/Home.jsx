import React, { useState } from 'react'
import useGetData from '../hooks/useGetData';
import { Link } from 'react-router-dom';
import { Modal, Movies,  } from '../components';
import { HashLoader } from 'react-spinners';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const {data, loading, error} = useGetData(showModal);
  
    if (loading) {
      return (
        <div className="w-full flex justify-center">
            <HashLoader color="#3B82F6" />
        </div>
      )
    }

    return (
      <>
        <div className="w-full container flex justify-end mb-10">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-800 rounded-xl py-2 px-4"
            type="button"
          >
            Create Movie +
          </button>
        </div>

        {showModal && <Modal setShowModal={setShowModal} />}
        {data && <Movies data={data} />}
      </>
    )
}

export default Home;