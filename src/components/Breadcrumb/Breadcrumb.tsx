import "./Breadcrumb.css";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <span>Home</span>
      <span>/</span>
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumb;