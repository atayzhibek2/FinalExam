import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rawenclaw.css';

function Rawenclaw() {
  const [rawenclaw, setRawenclaw] = useState([]);
  const navigate = useNavigate();

  function handleButtonClick(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    fetchRawenclaw();
  }, []);

  const fetchRawenclaw = () => {
    fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw')
      .then(response => response.json())
      .then(data => {
        setRawenclaw(data);
        console.log(rawenclaw)
      })
      .catch(error => console.log(error));
  };
  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="harry-potter-staff">
      <div className='HP'>Rawenclaw</div>
      <div className="character-container">
        {rawenclaw.map((staff, index) => (
          <div className="character-card" key={index}>
            <h2 className="character-name">{staff.name}</h2>
            {staff.image.length > 5 ? (
              <img className="character-image" src={staff.image} alt={staff.name} />
            ) : (
              <div className="character-image">
                <p>No image in API</p>
              </div>
            )}
              <div className='add_cont'>
                  <button onClick={()=>handleButtonClick(staff.id)} className='more_button'> <p className='more_text'>More</p> </button>

              </div>              </div>
        ))}
      </div>
    </div>
  );
};


export default Rawenclaw;