export default function ProductTitle({ title, subtitle, rating }) {
  return (
    <>
      <h3 className="text-primary">{title}</h3>
      <div>
        <span className="badge text-bg-success">{rating}</span>
        <span className="text-secondary ps-2">{subtitle}</span>
      </div>
    </>
  );
}

ProductTitle.defaultProps = {
  title: "POCO M6 Pro 5G (Power Black, 128 GB)  (6 GB RAM)",
  subtitle: "47,811 Ratings & 3,127 Reviews",
  rating: "4.2",
};
