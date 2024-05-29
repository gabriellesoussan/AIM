export default function HalfSquares({ content }) {
  return (
    <div
      className={
        "md:flex " +
        (content.image_align === "Image Right"
          ? "md:flex-row-reverse"
          : "md:flex-row") +
        (content.vertical_margin ? " my-10" : "")
      }
    >
      <div
        className="md:w-1/2 aspect-square bg-cover"
        style={{ backgroundImage: `url(${content.image?.url})` }}
        {...content.image?.$.url}
      ></div>
      <div className="md:w-1/2 flex ">
        <div className="mx-auto md:my-auto w-80 my-24" {...content.$?.body}>
          <h2 className=" text-neutral-700">{content.headline}</h2>

          <p className="mt-7 text-neutral-700 leading-7">{content.body}</p>

          {content.button_text && (
            <button className="mt-10 rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-cyan-600 shadow-sm ring-2 ring-inset ring-cyan-600 hover:text-white hover:bg-cyan-600">
              {content.button_text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
