"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export default function Page({ params }) {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByUrl(
            "article",
            "/articles/entry/" + params.title,
            params.locale
        );
        console.log(entry);
        setEntry(entry);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) 
        return;

    return (
        <div>
            <Header locale={params.locale} />

            <div className="bg-white px-6 pt-8 pb-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-neutral-700">
                    <p className="mb-6 text-sm font-semibold leading-7 text-cyan-600 uppercase">
                        ARTICLES / {entry?.headline}
                        {/* ARTICLES / {entry.taxonomies[0].term_uid} */}
                    </p>
                    <img src={entry?.banner_image?.url} className="mb-10"></img>

                    <h1 className="mt-5 text-4xl font-medium font-cinzel uppercase tracking-wider  sm:text-5xl text-neutral-700">
                        {entry?.headline}
                    </h1>
                    <p className="mt-6 font-poppins font-light text-md text-left whitespace-pre-wrap tracking-wide leading-8 text-neutral-700 italic">
                        {entry?.teaser}
                    </p>
                    {entry &&
                        <div className="mt-10 max-w-3xl whitespace-break-spaces article" dangerouslySetInnerHTML={{ __html: jsonToHtml(entry?.article_body) }}></div>
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}
