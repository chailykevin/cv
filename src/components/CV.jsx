/* eslint-disable react/prop-types */
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

function IconAndSome({ data }) {
  const listIcon = [
    {
      icon: FaPhoneAlt,
      value: data.phone ?? "+62 89521792425",
    },
    {
      icon: IoMdMail,
      value: data.email ?? "example@example.com",
    },
    {
      icon: MdLocationPin,
      value: data.address ?? "456 Elm Street, Los Angeles, USA",
    },
  ];

  return listIcon.map((item, index) => (
    <div className="Icons" key={index}>
      <item.icon className="icon" size="30" />
      <h3>{item.value}</h3>
    </div>
  ));
}

function Header({ generalInformation }) {
  return (
    <div id="headerCV">
      <div className="HeaderLeft">
        <h1>{generalInformation.fullName ?? "FULL NAME"}</h1>
        <p>{generalInformation.job ?? "JOB TO APPLY"}</p>
      </div>
      <div className="HeaderRight">
        <IconAndSome data={generalInformation} />
      </div>
    </div>
  );
}

function About({ about }) {
  return (
    <div className="containerCV">
      <h2>About Me</h2>
      <p>
        {about ??
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facere quaerat quas consectetur repellendus nemo laboriosam debitis perferendis deleniti nam atque, placeat, molestiae cum libero quasi aliquid. Accusamus, perspiciatis ut?"}
      </p>
    </div>
  );
}

function Jobs({ jobList }) {
  return (
    <div className="containerCV">
      <h2>Experience</h2>
      <div className="jobs">
        {jobList.length == 0
          ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facere quaerat quas consectetur repellendus nemo laboriosam debitis perferendis deleniti nam atque, placeat, molestiae cum libero quasi aliquid. Accusamus, perspiciatis ut?"
          : jobList.map((job, index) => <Job key={index} job={job} />)}
      </div>
    </div>
  );
}

function Job({ job }) {
  return (
    <div className="jobInfo">
      <h3>
        {(job.companyName ?? "Company Name") +
          " " +
          (job.startYear ?? "2000") +
          " - " +
          (job.endYear ?? "2024")}
      </h3>
      <p className="jobPosition">{job.jobPosition ?? "Job Position"}</p>
      <p>
        {job.desc ??
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facere quaerat quas consectetur repellendus nemo laboriosam debitis perferendis deleniti nam atque, placeat, molestiae cum libero quasi aliquid. Accusamus, perspiciatis ut?"}
      </p>
    </div>
  );
}

function Educations({ eduList }) {
  return (
    <div className="containerCV">
      <h2>Education</h2>
      <div className="jobs">
        {eduList.length == 0
          ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facere quaerat quas consectetur repellendus nemo laboriosam debitis perferendis deleniti nam atque, placeat, molestiae cum libero quasi aliquid. Accusamus, perspiciatis ut?"
          : eduList.map((edu, index) => <Education key={index} edu={edu} />)}
      </div>
    </div>
  );
}

function Education({ edu }) {
  return (
    <div className="eduInfo">
      <div className="eduLeft">
        <h3>{edu.year ?? "2015"}</h3>
        <p>{edu.university ?? "University Name"}</p>
        <h3>{edu.degree ?? "Your Degree"}</h3>
      </div>
      <div className="eduRight">
        <p>
          {edu.desc ??
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facere quaerat quas consectetur repellendus nemo laboriosam debitis perferendis deleniti nam atque, placeat, molestiae cum libero quasi aliquid. Accusamus, perspiciatis ut?"}
        </p>
      </div>
    </div>
  );
}

function CV({ generalInfo, jobList, eduList }) {
  return (
    <div className="container">
      <Header generalInformation={generalInfo} />
      <About about={generalInfo.about} />
      <Jobs jobList={jobList} />
      <Educations eduList={eduList} />
    </div>
  );
}

export default CV;
