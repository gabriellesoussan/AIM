export default function Cards({ content }) {
    // console.log("cards", content);

    function Card(data) {
        return (
            <div className="md:w-full lg:w-[550px] m-5 flex flex-col  bg-customBackground border border-gray-200 shadow " {...data.$.body}>
                <div href="#" className="h-[300px] bg-cover bg-bottom" style={{ backgroundImage: `url(${data.image?.url})` }}></div>
                <div className="p-5">
                    <a href="#">
                        <h2 className="mt-8 text-center text-customGreen">
                            {data.headline}
                        </h2>
                    </a>
                    <p className="m-5 mt-8 text-left whitespace-break-spaces leading-8 text-customGreen">
                        {data.body}
                    </p>
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
