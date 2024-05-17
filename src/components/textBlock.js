export default function TextBlock({ content }) {
  return (
    <div className="text-center py-24 max-w-2xl mx-auto px-6">
      <h1
        className=" text-[3.5rem] font-cinzel max-w-fit text-center text-neutral-700 tracking-widest mx-auto"
        {...content.$.headline}
      >
        {content.headline}
      </h1>
      <p className="mx-5 mt-8 font-poppins font-light text-[1.125rem] text-left whitespace-pre-wrap leading-8 text-gray-700"
      {...content.$.body}>
        {content.body}
      </p>
    </div>
  );
}
