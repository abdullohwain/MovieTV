import React from 'react'
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

function Movies({ data }) {  
    return (
      <div className="container">
        <ul className="grid grid-cols-3 gap-4">
          {data &&
            data.map((obj) => {
              return (
                <li key={obj.id}>
                  <Link
                    className="block rounded-md shadow-sm p-5 w-full h-full"
                    to="/movie"
                    >
                        <img 
                           className="w-full h-[200px] object-cover rounded-md mb-4" 
                           src={obj.image} 
                           alt={obj.title} />
                       <h2 className="font-medium text-xl">{obj.title}</h2>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    );
}

export default Movies