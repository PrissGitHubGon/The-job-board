const Job = (props) => {
  const className = props.className;
  const title = props.title;
  const contractType = props.contractType;
  const country = props.country;
  const city = props.city;
  const tiret = props.tiret;

  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="bas">
        <p>
          {city}
          {tiret}
          {contractType}
          {tiret}
          {country}
        </p>
      </div>
    </div>
  );
};

export default Job;
