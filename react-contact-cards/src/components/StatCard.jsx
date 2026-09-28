function StatCard({
  title,
  value,
  icon,
}) {

  return (
    <div className="stat-card">

      <div className="stat-top">

        <span className="stat-title">
          {title}
        </span>

        <span className="stat-icon">
          {icon}
        </span>

      </div>


      <div className="stat-value">
        {value}
      </div>


      <div className="stat-line">
        <span></span>
      </div>

    </div>
  );
}

export default StatCard;