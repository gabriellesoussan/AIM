"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import HalfSquares from "@/components/halfSquares";
import Hero from "@/components/hero";
import ImageGrid from "@/components/imageGrid";
import Reviews from "@/components/reviews";
import TextBlock from "@/components/textBlock";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";


export default function Home({ params }) {
  const [entry, setEntry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs(
      "homepage",
      params.locale,
      ['modular_blocks.review.reference', 'modular_blocks.image_grid.images.page', 'hero.hero_banner', 'hero.hero_banner.page', 'modular_blocks.review.testimonials', 'modular_blocks.review.testimonials.reviews.review']
    );
    console.log('homepage', entry[0][0]);
    setEntry(entry[0][0]);
    setIsLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (isLoading) return;
  
  return (
    <div data-pageref={entry.uid} data-contenttype="homepage" data-locale={params.locale}>
      
      <Hero content={entry.hero} locale={params.locale}/>
      {entry.modular_blocks.map((block, index) => {
        if (block.hasOwnProperty("text_block")) {
          return <TextBlock key={index} content={block.text_block} />;
        }

        if (block.hasOwnProperty("cards")) {
          return <Cards key={index} content={block.cards} />;
        }

        if (block.hasOwnProperty("image_grid")) {
          return <ImageGrid key={index} content={block.image_grid} />;
        }

        if (block.hasOwnProperty("review")) {
          return <Reviews key={index} content={block.review.testimonials[0]} />;
        }

        if (block.hasOwnProperty("text_and_image")) {
          return <HalfSquares key={index} content={block.text_and_image} />;
        }
 
      })}

      <Footer />
    </div>
  );
}
