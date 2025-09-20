import axios from 'axios';
import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

function Modal({ setShowModal }) {
    const handleSubmit = function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData);

        const postData = async function() {
            const response = await axios.post(
                "https://json-api.uz/api/project/movies/movies",
                obj
            );
            setShowModal(false); 
        };
        postData();

        e.target.reset();
    };


  return (
    <div className="w-screen h-screen fixed top-0 bg-[#000a] z-10">
        <div className="w-full max-w-[600px] px-4  absolute top-1/2 left-1/2 -translate-1/2">
            <div className="flex flex-col gap-4 bg-white p-6 rounded-xl">
                <button onClick={()=> setShowModal(false)} className="p-4 rounded-lg bg-gray-400 self-end" type="button"
                >
                    <IoCloseOutline />
                </button>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input 
                       className="input" 
                       type="url"
                       name="image"
                       placeholder="Move image" 
                       autoComplete='off'
                    />
                    <input 
                       className="input" 
                       type="text"
                       name="title"
                       placeholder="Move name" 
                       autoComplete='off'
                    />
                    <input 
                       className="input" 
                       type="text"
                       name="desc"
                       placeholder="Move description"
                       autoComplete='off'
                    />
                    <select className="input" name="ganre">
                        <option value="criminal">Criminal</option>
                        <option value="romance">Romance</option>
                        <option value="comedy">Comedy</option>
                        <option value="action">Action</option>
                        <option value="documentary">Documentary</option>
                    </select>

                    <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-800 rounded-xl py-2 px-4 text-white">
                        +
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal