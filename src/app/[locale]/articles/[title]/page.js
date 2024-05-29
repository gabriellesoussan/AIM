"use client";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Stack, { onEntryChange } from "@/lib/cstack";

export default function ArticlesList({ params }) {
  const [entry, setEntry] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByUrl(
      "article_list",
      "/articles/" + params.title,
      params.locale
    );
    setEntry(entry);

    if (entry.taxonomies.length > 0) {
      const articles = await Stack.getElementByTypeByTaxonomy(
        "article",
        params.locale,
        [...new Set(entry.taxonomies.map((tax) => tax.term_uid))]
      );
      setArticles(articles);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (isLoading) return;

  return (
    <>
      <Header locale={params.locale} />
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-medium text-3xl font-cinzel text-center tracking-widest text-neutral-700 uppercase">
              {entry.header}
            </h2>
            <p className="mt-2 font-poppins font-light text-md whitespace-pre-wrap leading-8 text-neutral-700 italic">
              {entry.subtext}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles[0]?.map((article) => (
              <article
                key={article.uid}
                className="flex flex-col items-start justify-between"
              >
                <a href={article.url}>
                  <div className="relative w-full">
                    <img
                      src={article.banner_image?.url}
                      alt=""
                      className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />

                    <div className="absolute inset-0" />
                  </div>
                </a>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Editorial Staff</time>

                    {article.taxonomies?.map((tax, tdx) => {
                      return (
                        <a
                          href={"/articles/categories/" + tax.term_uid}
                          key={tdx + tax.term_uid}
                          className="relative z-10 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 capitalize"
                        >
                          {tax.term_uid}
                        </a>
                      );
                    })}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-poppins font-medium leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={article.url}>
                        <span className="absolute inset-0" />
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm font-light font-poppins tracking-wide leading-6 text-neutral-700 whitespace-break-spaces">
                      {article.teaser}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
