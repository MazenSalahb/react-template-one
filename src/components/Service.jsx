export default function Service({ icon, title, paragraph }) {
  return (
    <div className="srv">
      <i className={icon}></i>
      <div className="text">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
