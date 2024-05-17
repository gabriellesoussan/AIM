"use client"
import { useState, useEffect } from 'react';
import Stack, { onEntryChange } from '@/lib/cstack'
import Header from "@/components/header";

export default function Page({ params }){
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByUrl('experiences', '/experiences', params.locale);
        console.log(entry)
        setEntry(entry);
        setIsLoading(false);
    }

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if(isLoading)
        return;

    return(
        <div>
            <Header locale={params.locale}/>

            {entry.modular_blocks.map((block, index) => {
                if(block.hasOwnProperty('cloudinary_image')){
                    if(block.cloudinary_image.image[0]?.url)
                        return <img key={index} className="h-[1000px] w-full object-cover" src={block.cloudinary_image.image[0].url} />
                }
                else if(block.hasOwnProperty('bynder_image')){
                    if(block.bynder_image.image[0]?.url)
                        return <img key={index} className="h-[1000px] w-full object-cover" src={block.bynder_image.image[0].files.webImage.url} />
                }
                else if(block.hasOwnProperty('aprimo_image')){
                    if(block.aprimo_image.image.length > 0)
                        return <img key={index} className="h-[1000px] w-full object-cover" src={block.aprimo_image.image[0].rendition.publicuri} />
                }
            })}
            
        </div>
    )
}