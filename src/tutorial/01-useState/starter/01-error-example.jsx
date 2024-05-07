const ErrorExample = () => {
  let count = 0;

  const HandleClick = () => {
    count = count + 1;
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={HandleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
