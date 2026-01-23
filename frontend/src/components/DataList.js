import React from 'react';
import './DataList.css';

function DataList({
  data,
  onDelete,
  onEditStart,
  editingId,
  editFormData,
  setEditFormData,
  onEditSubmit,
  onEditCancel,
}) {
  return (
    <div className="data-list">
      {data.map((item) => (
        <div key={item._id} className="data-item">
          {editingId === item._id ? (
            <form onSubmit={onEditSubmit} className="edit-form">
              <div className="form-group">
                <label htmlFor="edit-name">Name:</label>
                <input
                  type="text"
                  id="edit-name"
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-email">Email:</label>
                <input
                  type="email"
                  id="edit-email"
                  value={editFormData.email}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-message">Message:</label>
                <textarea
                  id="edit-message"
                  value={editFormData.message}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, message: e.target.value })
                  }
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="edit-category">Category:</label>
                <select
                  id="edit-category"
                  value={editFormData.category}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, category: e.target.value })
                  }
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="database">Database</option>
                </select>
              </div>
              <div className="edit-buttons">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button type="button" className="cancel-btn" onClick={onEditCancel}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="item-header">
                <h3>{item.name}</h3>
                <span className="category-badge">{item.category}</span>
              </div>
              <p className="item-email">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="item-message">
                <strong>Message:</strong> {item.message}
              </p>
              <p className="item-date">
                <strong>Submitted:</strong> {new Date(item.createdAt).toLocaleString()}
              </p>
              <div className="item-actions">
                <button
                  className="edit-btn"
                  onClick={() => onEditStart(item)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default DataList;
