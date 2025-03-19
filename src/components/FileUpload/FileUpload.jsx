import React from "react";
import "./FileUpload.css";

const FileUpload = ({ addRecords }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const newData = JSON.parse(e.target.result);
        if (!Array.isArray(newData)) {
          alert("Invalid file format. JSON must be an array.");
          return;
        }
        addRecords(newData);
      } catch (error) {
        alert("Error reading file. Ensure it's a valid JSON.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-upload" className="file-upload-label">
        Upload JSON File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".json"
        className="file-upload-input"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
