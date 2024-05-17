import StarRating from "@/helpers/StarRating";

export default function Reviews({ content }) {

    // console.log('review', content)

    if (content == null) {
        return <></>
    }

    return (
        <div className="relative bg-gray-800 flex h-[600px] px-6">
            <div className="absolute inset-0 overflow-hidden bg-[#F0F9FF]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-20" />
            <div className="relative mx-auto flex max-w-2xl my-auto flex-col items-center">
                <div className="flex flex-row mb-10 space-x-3"
                    {...content?.$.star_rating}>
                    <StarRating rating={content?.star_rating} />
                </div>
                <h2 className="text-3xl font-medium font-cinzel uppercase tracking-widest  sm:text-4xl text-black"
                    {...content?.$.title}>
                    {content?.title}
                </h2>

                <p
                    className="mt-10 font-poppins tracking-widest text-black"
                    dangerouslySetInnerHTML={{ __html: content?.review }}
                    {...content?.$.review}
                ></p>

                <p
                    className="mt-10 font-poppins tracking-widest text-black"
                    {...content?.$.reviewer_name}
                >

                    - {content?.reviewer_name}
                </p>
            </div>
        </div>
    );
}
