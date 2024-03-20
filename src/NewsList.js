import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // GET kérés az összes hír lekérdezéséhez
    axios.get('http://localhost:5000/api/news')
      .then(response => setNewsList(response.data))
      .catch(error => console.error('Hiba a lekérdezés során:', error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <select id="language" className='form-control text-white bg-dark'>
              <option value="hu">Magyar</option>
              <option value="en">English</option>
            </select>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            {newsList.map(news => (
              <div className='page rounded' key={news.news_id}>
                <h1 style={{ textAlign: 'center' }}>{news.news_brief}</h1>
                <img
                  src={`data:image/jpeg;base64,${news.news_pict}`}
                  alt="Hír kép"
                  style={{ width: '100%', height: 'auto' }}
                />
                <h2>{news.news_title}</h2>
                <p>{news.news_full_hu}</p>
                <p>{news.news_full_en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;