const ProgressBar = ({ level }) => {
  return (
    <div className="relative w-full h-3 bg-gray-200 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-black rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  );
};

export default ProgressBar;
