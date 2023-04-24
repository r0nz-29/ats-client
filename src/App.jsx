import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/upload_resume", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setAtsScore(data.ats_score);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {atsScore && <p>ATS Score: {atsScore}</p>}
    </div>
  );
}

export default App;
