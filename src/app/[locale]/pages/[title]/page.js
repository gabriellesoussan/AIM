"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHero from "@/components/pageHero";
import TextSection from "@/components/textSection";
import People from "@/components/people";
import Hero from "@/components/hero";

export default function Page({ params }) {
  const [entry, setEntry] = useState({});

  const getContent = async () => {
    const entry = await Stack.getElementByUrlWithRefs(
      "page",
      "/pages/" + params.title,
      params.locale,
      ['modular_blocks.hero_banner.hero_banner']
    );
    console.log(entry);
    setEntry(entry);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);
  

  return (
    <div>
      <Header locale={params.locale} />

      {entry?.modular_blocks?.map((block, index) => {
        if (block.hasOwnProperty("hero")) {
          return <PageHero key={index} content={block.hero} />;
        }
        if (block.hasOwnProperty("people")) {
          return <People key={index} content={block.people} />;
        }
        if (block.hasOwnProperty("text_block")) {
          return <TextSection key={index} content={block.text_block} />;
        }
        if (block.hasOwnProperty("hero_banner")) {
          return <Hero key={index} content={block.hero_banner.hero_banner} locale={params.locale} withHeader={false}/>
        }
        
      })}

      <Footer />
    </div>
  );
}
