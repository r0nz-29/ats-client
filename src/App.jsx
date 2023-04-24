import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [history, setHistory] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(document.getElementById("name").value);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", document.getElementById("name").value);

    const response = await fetch("http://localhost:5000/upload_resume", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setAtsScore(data.ats_score);
    setHistory(data.rows);
  };

  const getHistory = () => {
    fetch("http://localhost:5000/history", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHistory(data);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="h-screen">
      <div className="border-b border-slate-200 w-full p-4 text-4xl text-center z-10">
        HireMate
      </div>
      <div className="relative mx-auto flex flex-col justify-center items-center">
        <img
          className="absolute right-0 top-0 w-2/5 z-0"
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        />
        <form onSubmit={handleSubmit} className="my-16 flex flex-col gap-y-4">
          <input
            placeholder="Enter your name"
            className="border p-2 rounded-lg"
            name="name"
            id="name"
            required
          />
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
          <button
            type="submit"
            className="border bg-white border-slate-200 p-4 py-1 rounded-lg shadow-md hover:shadow-blue-200 hover:border-slate-300"
          >
            Upload
          </button>
        </form>
        {atsScore && (
          <p className="mb-8 border bg-white border-slate-300 max-w-lg px-4 py-2 shadow-md rounded-md shadow-purple-200">
            Your resume is {atsScore}% relevant
          </p>
        )}
        <p className="text-xl mb-2 mt-16">Past results</p>
        <div className="border bg-white border-slate-300 max-w-lg px-4 py-2 shadow-md rounded-md shadow-blue-100">
          <div className="grid grid-cols-3 font-semibold">
            <p>Name</p>
            <p>Score</p>
            <p>Time</p>
          </div>
          {history &&
            history.reverse().map((row) => (
              <div
                key={Math.random().toString(16)}
                className="grid grid-cols-3 pt-2"
              >
                <p>{row.name}</p>
                <p>{row.score}%</p>
                <p>{new Date(row.date_added).toDateString()}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
