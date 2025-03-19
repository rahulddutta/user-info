import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("clientRecords")) || [];
    setRecords(storedData);
  }, []);

  const updateLocalStorage = (updatedRecords) => {
    setRecords(updatedRecords);
    localStorage.setItem("clientRecords", JSON.stringify(updatedRecords));
  };

  const addRecords = (newRecords) => {
    const storedRecords = JSON.parse(localStorage.getItem("clientRecords")) || [];
    const mergedData = [...storedRecords, ...newRecords];

    const uniqueRecords = mergedData.reduce((acc, record) => {
      if (!acc.some((r) => r.email === record.email)) {
        acc.push({ id: record.id || uuidv4(), ...record });
      }
      return acc;
    }, []);

    updateLocalStorage(uniqueRecords);
  };

  const editRecord = (id, updatedData) => {
    const updatedRecords = records.map((rec) =>
      rec.id === id ? { ...rec, ...updatedData } : rec
    );
    updateLocalStorage(updatedRecords);
  };

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((rec) => rec.id !== id);
    updateLocalStorage(updatedRecords);
  };

  return (
    <RecordsContext.Provider value={{ records, addRecords, editRecord, deleteRecord }}>
      {children}
    </RecordsContext.Provider>
  );
};
