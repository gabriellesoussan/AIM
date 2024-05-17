"use client"


export default function PageHero({ content }) {
    return (
        <div>

            <div
                className={`${content?.style === "Full Image" ? "" : "hidden"} ${content?.text_color === "Light" ? "text-white" : "text-black"} flex h-[800px] bg-neutral-600 bg-cover bg-top`}
                style={{ backgroundImage: `url(${content?.image?.url})` }}
            >
                {content?.layout === "Text Right" &&
                    <div className="flex px-8 gap-8 my-auto max-w-7xl w-full text-right mx-auto justify-right">
                        <div className="font-poppins ml-auto">
                            <p className={`text-[60px] leading-tight ${content?.text_color === "Light" ? "text-white" : "text-[#005D94]"} tracking-wider font-poppins`}>{content?.headline}</p>
                            <p className="mt-4 whitespace-pre-wrap text-xl">{content?.details}</p>
                        </div>
                    </div>
                }
                {content.layout === "Text Left" &&
                    <div className="flex px-8 gap-8 mx-auto max-w-7xl w-full my-auto">
                        <div className="font-poppins">
                            <p className={`text-[60px] leading-tight ${content?.text_color === "Light" ? "text-white" : "text-[#005D94]"} tracking-wider font-poppins`}>{content?.headline}</p>
                            <p className="mt-4 whitespace-pre-wrap text-xl">{content?.details}</p>
                        </div>
                    </div>
                }
                {content.layout === "Center" &&
                    <div className="flex px-24 gap-8 my-auto mx-auto text-center">
                        <div className="font-poppins">
                            <p className={`text-[60px] leading-tight ${content?.text_color === "Light" ? "text-white" : "text-[#005D94]"} tracking-wider font-poppins`}>{content?.headline}</p>
                            <p className="mt-4 whitespace-pre-wrap text-xl">{content?.details}</p>
                        </div>
                    </div>
                }
            </div>

            <div className={`hidden  ${content?.style === "Full Image" ? "hidden" : "md:block"}  mx-auto px-8 `}>
                {(content?.layout === "Text Right" || content?.layout === "Center") &&
                    <div className="flex  gap-8 items-center">
                        <div className="w-1/2 flex">
                            <img className="" src={content?.image?.url} />
                        </div>

                        <div className="font-poppins mx-auto max-w-lg">
                            <p className="text-[60px] leading-tight text-[#005D94] tracking-wider font-poppins">{content?.headline}</p>
                            <p className="mt-4 whitespace-pre-wrap text-lg">{content?.details}</p>
                        </div>
                    </div>
                }
                {content.layout === "Text Left" &&
                    <div className="flex gap-8 items-center">
                        <div className="w-1/2 flex">
                            <div className="font-poppins mx-auto max-w-lg">
                                <p className="text-[60px] leading-tight text-[#005D94] tracking-wider font-poppins">{content?.headline}</p>
                                <p className="mt-4 whitespace-pre-wrap text-lg">{content?.details}</p>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <img className="" src={content?.image?.url} />
                        </div>
                    </div>
                }
            </div>

            <div className={`md:hidden ${content?.style === "Full Image" ? "hidden" : ""} max-w-7xl mx-auto px-8 `}>
                <img className="" src={content?.image?.url} />

                <div className="font-poppins mt-8">
                    <p className="text-[60px] leading-tight text-[#005D94] tracking-wider font-poppins">{content?.headline}</p>
                    <p className="mt-4 whitespace-pre-wrap">{content?.details}</p>
                </div>
            </div>
        </div>
    )
}