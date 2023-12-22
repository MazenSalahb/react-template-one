export default function SpecialHeading({ title, paragraph }) {
  return (
    <>
      <h2 className="special-heading">{title}</h2>
      <p>{paragraph}</p>
    </>
  );
}
