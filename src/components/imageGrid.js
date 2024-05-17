export default function ImageGrid({ content }) {
    return (
        <div className="max-w-[1440px] mx-auto mt-32 mb-32 px-8 font-cinzel">
            <div className="flex flex-col md:grid  md:grid-cols-3 gap-8 auto-rows-fr">
                {content?.images?.map((item, index) => (
                    <a
                        href={item.page.length > 0 ? item.page[0].url : "#"}
                        key={index}
                        className={`bg-cover bg-bottom aspect-square ${item.span === 1 ? "aspect-square" : item.span === 2 ? "col-span-2 md:aspect-auto" : "col-span-3 md:aspect-auto"} flex items-center justify-center`}
                        style={{ backgroundImage: `url(${item.image?.url})`}} {...item.image?.$?.url}
                    >
                        <div className="w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
                            <p className="text-white text-4xl font-bold text-center"> {item?.text}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

