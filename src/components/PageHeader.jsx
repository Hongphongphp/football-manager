import Icon from "./Icon";

function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-icon">
        <Icon name={icon} size={28} />
      </div>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export default PageHeader;
