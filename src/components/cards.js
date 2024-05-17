export default function Cards({ content }) {
    // console.log("cards", content);

    function Card(data) {
        return (
            <div className="md:w-full lg:w-[550px] m-5 flex flex-col  bg-white border border-gray-200 shadow " {...data.$.body}>
                <div href="#" className="h-[300px] bg-cover bg-bottom" style={{ backgroundImage: `url(${data.image?.url})` }}></div>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mt-8 font-medium text-3xl font-cinzel text-center tracking-widest text-neutral-700">
                            {data.headline}
                        </h5>

                    </a>
                    <p className="mx-5 mt-8 font-light font-poppins tracking-wide leading-7 text-gray-700 whitespace-break-spaces">
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
            {Card(content.card_1)}
            {Card(content.card_2)}
        </div>
    );
}
