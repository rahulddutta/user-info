import React, { useState, useContext } from "react";
import { RecordsContext } from "../features/RecordsContext";
import SearchBar from "../components/SearchBar/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import FileUpload from "../components/FileUpload/FileUpload";





const ITEMS_PER_PAGE = 2;

const User = () => {
  const { records, addRecords, editRecord, deleteRecord } = useContext(RecordsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingRecord, setEditingRecord] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", email: "" });

  const filteredRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(record.id).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRecords.length / ITEMS_PER_PAGE);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Client Records Management</h2>
      <FileUpload addRecords={addRecords} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserTable
        records={paginatedRecords}
        editingRecord={editingRecord}
        setEditingRecord={setEditingRecord}
        editedData={editedData}
        setEditedData={setEditedData}
        editRecord={editRecord}
        deleteRecord={deleteRecord}
      />
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default User;
