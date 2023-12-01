export default function ProductImage({
  image,
  imageAlt,
  tagLabel = "Bestseller",
}) {
  return (
    <div className="position-relative">
      <img src={image} alt={imageAlt} className="w-100" height={200} />
      <div className="position-absolute top-0 start-0 translate-middle badge text-bg-success">
        {tagLabel}
      </div>
    </div>
  );
}
