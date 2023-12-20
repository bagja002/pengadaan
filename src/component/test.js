
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourComponent() {
  const [formData, setFormData] = useState({
    paket_pengadaan: '',
    id_rup: '',
    nilai_rup: '',
    // ... other form data
  });

  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    // Fetch data from API for options
    axios.get('http://localhost:9000/user/faker')
      .then(response => {
        setOptions(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'paket_pengadaan') {
      const selectedOption = options.find(option => option.ID === parseInt(value, 10));
      setFormData({
        ...formData,
        [name]: value,
        id_rup: selectedOption ? selectedOption.IDRUP : '',
        nilai_rup: selectedOption ? selectedOption.NilaiRUP : '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor='paket_pengadaan'>Paket Pengadaan</label>
        <select 
          id='paket_pengadaan' 
          name='paket_pengadaan'
          value={formData.paket_pengadaan}
          onChange={handleChange}
        >
          <option value=''>Pilih Paket Pengadaan</option>
          {options.map(option => (
            <option key={option.ID} value={option.ID}>
              {option.NamaPengadaan} 
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='id_rup'>ID RUP</label>
        <input 
          type='text' 
          id='id_rup' 
          name='id_rup' 
          placeholder='Id RUP'
          value={formData.id_rup}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor='nilai_rup'>Nilai RUP</label>
        <input 
          type='text' 
          id='nilai_rup' 
          name='nilai_rup' 
          placeholder='Nilai RUP'
          value={formData.nilai_rup}
          onChange={handleChange}
        />
      </div>
      
      {/* ... other form inputs */}
    </form>
  );
}

export default YourComponent;
