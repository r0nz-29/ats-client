import React, { useState } from "react";

import head from './assets/head.jpg';

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

<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
    <img src={head} width="40" height="45" class="d-inline-block align-top" alt=""/>
  <h3>HireMate</h3>
  </a>
</nav>

<div class="card text-center">
  <div class="card-header">
    <h4>Get Your Resume Evaluated !! </h4>
  </div>
  <div class="card-body">
    <h4 class="card-title">Choose a File</h4>
    <a href="#" class="btn btn-primary">Choose a File </a>
    <p class="card-text">No File Choosen.</p>
    {/* <a href="#" class="btn btn-primary">Upload</a> */}
    <button type="button" class="btn btn-success btn-lg btn-block">Upload</button>
  </div>
  {/* <div class="card-footer text-muted">
    Your ATS Score is : 
  </div> */}

</div>

<div>
<div class="progress">
  <h6> Score Line </h6>
  <div class="progress-bar bg-info w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>



<div>


<div> 
<div class="jumbotron jumbotron-primary ">
  <div class="container">
    <h4 class="display-4">Your ATS Score is : </h4>
   
  </div>

  
</div>
</div>






      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      
        <button type="submit" class="btn btn-primary">Upload</button>
      </form>
      {atsScore && <p>ATS Score: {atsScore}</p>}

      </div>

    </div>
  );
}

export default App;
