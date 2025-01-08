"use client";

const JobItem = ({ job }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-2xl">{job.title}</div>

      <div className="text-xl">{job.descrition}</div>

      <div>{job.date}</div>

      <div>{job.company}</div>
    </div>
  );
};

export default JobItem;
