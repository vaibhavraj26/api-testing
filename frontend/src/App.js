import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DataForm from './components/DataForm';
import DataList from './components/DataList';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  // Use environment variable for API URL (for deployment)
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  // Fetch all data on component mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/data`);
      setData(response.data.data || []);
    } catch (err) {
      setError('Failed to fetch data: ' + (err.response?.data?.error || err.message));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddData = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/data`, formData);
      setData([response.data.data, ...data]);
      setError(null);
    } catch (err) {
      setError('Failed to add data: ' + (err.response?.data?.error || err.message));
      console.error(err);
    }
  };

  const handleDeleteData = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await axios.delete(`${API_BASE_URL}/data/${id}`);
        setData(data.filter((item) => item._id !== id));
        setError(null);
      } catch (err) {
        setError('Failed to delete data: ' + (err.response?.data?.error || err.message));
        console.error(err);
      }
    }
  };

  const handleEditStart = (item) => {
    setEditingId(item._id);
    setEditFormData(item);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/data/${editingId}`,
        editFormData
      );
      setData(
        data.map((item) =>
          item._id === editingId ? response.data.data : item
        )
      );
      setEditingId(null);
      setEditFormData(null);
      setError(null);
    } catch (err) {
      setError('Failed to update data: ' + (err.response?.data?.error || err.message));
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Database Application</h1>
        <p>Frontend: React | Backend: Node.js | Database: MongoDB Atlas</p>
      </header>

      <main className="container">
        <div className="form-section">
          <DataForm onSubmit={handleAddData} />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="data-section">
          <h2>Stored Data ({data.length})</h2>
          {loading ? (
            <p className="loading">Loading...</p>
          ) : data.length === 0 ? (
            <p className="no-data">No data yet. Add some to get started!</p>
          ) : (
            <DataList
              data={data}
              onDelete={handleDeleteData}
              onEditStart={handleEditStart}
              editingId={editingId}
              editFormData={editFormData}
              setEditFormData={setEditFormData}
              onEditSubmit={handleEditSubmit}
              onEditCancel={handleEditCancel}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
