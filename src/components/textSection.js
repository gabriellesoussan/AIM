export default function TextSection({ content }) {
  return (
    <div className="max-w-7xl px-8 mx-auto pt-24">
      <p className="text-customGreen font-semibold text-xl">{content?.title}</p>
      <div
        className={`w-full text-md mt-8 temp ${
          content?.two_columns ? "two-cols" : ""
        } whitespace-break-spaces`}
        dangerouslySetInnerHTML={{ __html: content?.body }}
      ></div>
    </div>
  );
}
