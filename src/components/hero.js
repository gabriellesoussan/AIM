import Header from "./header";

export default function Hero({ content, locale }) {
    
    let segment = 'default';
    if (typeof window !== 'undefined') {
        segment = localStorage.getItem('segment') || "default";
    }

    return (
        <div className=" "
        >
            {content?.map((hero, index) => {
                if (hero.segment === segment) {
                    return (
                        <div key={index} className="bg-black relative isolate overflow-hidden h-screen flex">
                            <img
                                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75"
                                src={hero.image?.url}
                            />

                            <Header color="white" locale={locale} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl ">
                                <div className="text-center md:w-[42rem]">

                                    <h1
                                        className="mt-8 font-cinzel text-5xl font-medium text-center text-white tracking-widest leading-normal"

                                    >
                                        {hero.headline}
                                    </h1>

                                    <p className="mx-5 mt-8 font-poppins font-light tracking-wider text-left text-white">
                                        {hero.body}
                                    </p>

                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <a
                                            href={(hero.page.length > 0 ? hero.page[0].url : "#")}
                                            className="rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-white shadow-sm ring-2 ring-inset ring-gray-300 hover:text-gray-700 hover:bg-gray-50"

                                        >
                                            {hero.button_text}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}


        </div>
    );
}
