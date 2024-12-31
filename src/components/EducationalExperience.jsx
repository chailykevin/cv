/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function EduInfo({
  edu,
  setShown,
  updateEducation,
  deleteEducation,
  isActive,
}) {
  const [showForm, setShowForm] = useState(false);
  const education = {
    university: edu.university,
    year: edu.year,
    degree: edu.degree,
    desc: edu.desc,
  };

  function toggleForm() {
    setShown();
    setShowForm(!showForm);
  }

  function saveEdit(e) {
    toggleForm();
    updateEducation(e);
  }

  return (
    <>
      {isActive && (
        <EducationForm
          edu={education}
          onCancel={toggleForm}
          onSubmit={(e) => saveEdit(e)}
        />
      )}

      {!isActive && (
        <div className="edu">
          <h2>{edu.university}</h2>
          <div>
            <MdEdit size={26} onClick={toggleForm} className="icon" />
            <MdDelete size={26} className="icon" onClick={deleteEducation} />
          </div>
        </div>
      )}
    </>
  );
}

function EduInput(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.value}
      />
    </>
  );
}

function EducationForm({ onSubmit, onCancel, edu }) {
  const inputField = [
    {
      name: "University Name",
      placeholder: "Ex. Universitas Widya Dharma Pontianak",
      value: edu.university,
    },
    { name: "Year", placeholder: "Ex. 2022", value: edu.year },
    { name: "Degree", placeholder: "Ex. Accounting", value: edu.degree },
    { name: "Description", placeholder: "Ex. Lorem", value: edu.desc },
  ];

  return (
    <div>
      <form onSubmit={onSubmit}>
        {inputField.map((field, index) => (
          <EduInput
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

function Header({ eduList, setEduList, eduEdit, setEduEdit }) {
  function toggleFormVisibility() {
    if (eduEdit != -1) {
      setEduEdit(-1);
    } else {
      setEduEdit(-2);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const edu = {
      university: e.target.elements[0].value,
      year: e.target.elements[1].value,
      degree: e.target.elements[2].value,
      desc: e.target.elements[3].value,
    };

    const eduArrayed = Object.values(edu);

    if (eduArrayed.includes("")) {
      alert("Insert all fields!");
    } else {
      setEduList([...eduList, edu]);
      setEduEdit(-2);
    }
  }

  function updateEducation(e, index) {
    e.preventDefault();
    const edu = {
      university: e.target.elements[0].value,
      year: e.target.elements[1].value,
      degree: e.target.elements[2].value,
      desc: e.target.elements[3].value,
    };

    const eduArrayed = Object.values(edu);

    if (eduArrayed.includes("")) {
      alert("Insert all fields!");
    } else {
      const eduListNew = [...eduList];
      eduListNew[index] = edu;
      setEduList(eduListNew);
    }
  }

  function deleteEducation(index) {
    const eduListNew = eduList.filter((edu, indexs) => indexs != index);
    setEduList(eduListNew);
  }

  function setShown(index) {
    if (eduEdit == index) {
      setEduEdit(-2);
    } else {
      setEduEdit(index);
    }
  }

  return (
    <div id="header" className="all">
      <h1>Educational Experience</h1>

      {eduList.map((edu, index) => (
        <EduInfo
          key={index}
          edu={edu}
          updateEducation={(e) => updateEducation(e, index)}
          deleteEducation={() => deleteEducation(index)}
          setShown={() => setShown(index)}
          isActive={index == eduEdit}
        />
      ))}

      {eduEdit != -1 && (
        <button onClick={toggleFormVisibility}>
          Add Educational Experience
        </button>
      )}

      {eduEdit == -1 && (
        <EducationForm
          onSubmit={handleFormSubmit}
          onCancel={toggleFormVisibility}
          edu={""}
        />
      )}
    </div>
  );
}

function EducationalExperience({ eduList, setEduList, eduEdit, setEduEdit }) {
  return (
    <div>
      <Header
        eduList={eduList}
        setEduList={setEduList}
        eduEdit={eduEdit}
        setEduEdit={setEduEdit}
      />
    </div>
  );
}

export default EducationalExperience;
