"use client";

const JobItem = ({ job }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold bg-white p-3 rounded-b-lg rounded-s-lg">
        {job.title}
      </div>

      <div className="text-sm p-3 italic">{job.description}</div>

      <div className="text-sm p-3 font-semibold text-red-400">{job.date}</div>

      <div className="text-sm p-1 bg-white rounded font-semibold w-fit">
        {job.company}
      </div>
    </div>
  );
};

export default JobItem;
