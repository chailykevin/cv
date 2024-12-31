import { useState } from "react";
import GeneralInput from "./components/GeneralInput.jsx";
import EducationalExperience from "./components/EducationalExperience.jsx";
import JobExperience from "./components/JobExperience.jsx";
import CV from "./components/CV.jsx";
import "./App.css";

function App() {
  const [generalInformation, setGeneralInformation] = useState({});
  const [jobList, setJobList] = useState([]);
  const [eduList, setEduList] = useState([]);
  const [jobEdit, setJobEdit] = useState(-2);
  const [eduEdit, setEduEdit] = useState(-2);

  function saveInputs(e) {
    e.preventDefault();
    const generalInformationData = {
      fullName: e.target.elements[0].value.toUpperCase(),
      job: e.target.elements[1].value.toUpperCase(),
      phone: e.target.elements[2].value,
      email: e.target.elements[3].value,
      address: e.target.elements[4].value,
      about: e.target.elements[5].value,
    };

    const generalInformationArray = Object.values(generalInformationData);

    if (generalInformationArray.includes("")) {
      alert("Insert all fields!");
    } else {
      setGeneralInformation(generalInformationData);
    }
  }

  return (
    <>
      <div id="sidebar">
        <GeneralInput saveInputs={saveInputs} />
        <JobExperience
          jobList={jobList}
          setJobList={setJobList}
          jobEdit={jobEdit}
          setJobEdit={setJobEdit}
        />
        <EducationalExperience
          eduList={eduList}
          setEduList={setEduList}
          eduEdit={eduEdit}
          setEduEdit={setEduEdit}
        />
      </div>
      <div id="main">
        <CV
          generalInfo={generalInformation}
          jobList={jobList}
          eduList={eduList}
        />
      </div>
    </>
  );
}

export default App;
