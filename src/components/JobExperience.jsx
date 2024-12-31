/* eslint-disable react/prop-types */
import { MdDelete, MdEdit } from "react-icons/md";

function JobInfo({ job, setShown, updateJob, deleteJob, isEditActive }) {
  const newJob = {
    companyName: job.companyName,
    startYear: job.startYear,
    endYear: job.endYear,
    jobPosition: job.jobPosition,
    desc: job.desc,
  };

  function toggleForm() {
    setShown();
  }

  function saveEdit(e) {
    toggleForm();
    updateJob(e);
  }

  return (
    <>
      {isEditActive && (
        <JobForm
          job={newJob}
          onCancel={toggleForm}
          onSubmit={(e) => saveEdit(e)}
        />
      )}

      {!isEditActive && (
        <div className="edu">
          <h2>{job.companyName}</h2>
          <div>
            <MdEdit size={26} onClick={toggleForm} className="icon" />
            <MdDelete size={26} className="icon" onClick={deleteJob} />
          </div>
        </div>
      )}
    </>
  );
}

function JobInput({ name, placeholder, value }) {
  return (
    <>
      <h3>{name}</h3>
      <input type="text" placeholder={placeholder} defaultValue={value} />
    </>
  );
}

function JobForm({ onSubmit, onCancel, job }) {
  const inputField = [
    {
      name: "Company Name",
      placeholder: "Ex. Google",
      value: job.companyName,
    },
    { name: "Start Year", placeholder: "Ex. 2022", value: job.startYear },
    { name: "End Year", placeholder: "Ex. 2024", value: job.endYear },
    {
      name: "Job Position",
      placeholder: "Ex. Accountant",
      value: job.jobPosition,
    },
    { name: "Description", placeholder: "Ex. Lorem", value: job.desc },
  ];

  return (
    <div>
      <form onSubmit={onSubmit}>
        {inputField.map((field, index) => (
          <JobInput
            key={index}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
          />
        ))}
        <button type="submit">Save</button>
        <button type="button" className="inverted" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

function Header({ jobList, setJobList, jobEdit, setJobEdit }) {
  function toggleFormVisibility() {
    if (jobEdit != -1) {
      setJobEdit(-1);
    } else {
      setJobEdit(-2);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const job = {
      companyName: e.target.elements[0].value.trim(),
      startYear: e.target.elements[1].value.trim(),
      endYear: e.target.elements[2].value.trim(),
      jobPosition: e.target.elements[3].value.trim(),
      desc: e.target.elements[4].value.trim(),
    };

    const jobArrayed = Object.values(job);

    if (jobArrayed.includes("")) {
      alert("Insert all fields!");
    } else {
      setJobList([...jobList, job]);
      setJobEdit(-2);
    }
  }

  function updateJob(e, index) {
    e.preventDefault();
    const job = {
      companyName: e.target.elements[0].value.trim(),
      startYear: e.target.elements[1].value.trim(),
      endYear: e.target.elements[2].value.trim(),
      jobPosition: e.target.elements[3].value.trim(),
      desc: e.target.elements[4].value.trim(),
    };

    const jobArrayed = Object.values(job);

    if (jobArrayed.includes("")) {
      alert("Insert all fields!");
    } else {
      const jobListNew = [...jobList];
      jobListNew[index] = job;
      setJobList(jobListNew);
    }
  }

  function deleteJob(index) {
    const jobListNew = jobList.filter((job, indexs) => indexs != index);
    setJobList(jobListNew);
  }

  function setShown(index) {
    if (jobEdit == index) {
      setJobEdit(-2);
    } else {
      setJobEdit(index);
    }
  }

  return (
    <div id="header" className="all">
      <h1>Job Experience</h1>

      {jobList.map((job, index) => (
        <JobInfo
          key={index}
          job={job}
          updateJob={(e) => updateJob(e, index)}
          deleteJob={() => deleteJob(index)}
          setShown={() => setShown(index)}
          isEditActive={index == jobEdit}
        />
      ))}

      {jobEdit != -1 && (
        <button onClick={toggleFormVisibility}>Add Job Experience</button>
      )}

      {jobEdit == -1 && (
        <JobForm
          onSubmit={handleFormSubmit}
          onCancel={toggleFormVisibility}
          job={""}
        />
      )}
    </div>
  );
}

function JobExperience({ jobList, setJobList, jobEdit, setJobEdit }) {
  return (
    <div>
      <Header
        jobList={jobList}
        setJobList={setJobList}
        jobEdit={jobEdit}
        setJobEdit={setJobEdit}
      />
    </div>
  );
}

export default JobExperience;
