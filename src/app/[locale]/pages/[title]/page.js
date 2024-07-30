"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHero from "@/components/pageHero";
import TextSection from "@/components/textSection";
import People from "@/components/people";

export default function Page({ params }) {
  const [entry, setEntry] = useState({});

  const getContent = async () => {
    const entry = await Stack.getElementByUrl(
      "page",
      "/pages/" + params.title,
      params.locale
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
        } else if (block.hasOwnProperty("text_block")) {
          return <TextSection key={index} content={block.text_block} />;
        }
      })}

      <Footer />
    </div>
  );
}
