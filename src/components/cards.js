export default function Cards({ content }) {
    // console.log("cards", content);

    function Card(data) {
        return (
            <div className="md:w-full lg:w-[550px] m-5 flex flex-col  bg-white border border-gray-200 shadow " {...data.$.body}>
                <div href="#" className="h-[300px] bg-cover bg-bottom" style={{ backgroundImage: `url(${data.image?.url})` }}></div>
                <div className="p-5">
                    <a href="#">
                        <h2 className="mt-8 text-center text-neutral-700">
                            {data.headline}
                        </h2>
                    </a>
                    <p className="m-5 mt-8 text-left whitespace-break-spaces leading-8 text-neutral-700">
                        {data.body}
                    </p>
                </div>
                <div className="flex flex-col items-center mt-auto mb-12">
                    <button className="rounded-md px-8 py-4 text-md tracking-widest uppercase font-bold text-cyan-600 shadow-sm ring-2 ring-inset ring-cyan-600 hover:text-white hover:bg-cyan-600">
                        {data.button_text}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-24 lg:flex lg:flex-row justify-center bg-sky-50">
            {Card(content.card[0])}
            {Card(content.card[1])}
        </div>
    );
}
