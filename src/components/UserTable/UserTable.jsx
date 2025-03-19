import React from "react";
import "./UserTable.css";

const UserTable = ({
  records,
  editingRecord,
  setEditingRecord,
  editedData,
  setEditedData,
  editRecord,
  deleteRecord,
}) => {
  const handleEdit = (record) => {
    setEditingRecord(record.id);
    setEditedData({ name: record.name, email: record.email });
  };

  const handleSaveEdit = () => {
    if (!editedData.name || !editedData.email) {
      alert("Name and Email are required!");
      return;
    }
    if (records.some((rec) => rec.email === editedData.email && rec.id !== editingRecord)) {
      alert("Email must be unique!");
      return;
    }
    editRecord(editingRecord, editedData);
    setEditingRecord(null);
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.id}</td>
            <td>
              {editingRecord === record.id ? (
                <input
                  type="text"
                  value={editedData.name}
                  onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                />
              ) : (
                record.name
              )}
            </td>
            <td>
              {editingRecord === record.id ? (
                <input
                  type="email"
                  value={editedData.email}
                  onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                />
              ) : (
                record.email
              )}
            </td>
            <td>
              {editingRecord === record.id ? (
                <button className="save-button" onClick={handleSaveEdit}>Save</button>
              ) : (
                <>
                  <button className="edit-button" onClick={() => handleEdit(record)}>Edit</button>
                  <button className="delete-button" onClick={() => deleteRecord(record.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
