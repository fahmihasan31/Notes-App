import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import Archive from "./components/archive";
import NoteForm from "./components/NoteForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<NoteForm />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
