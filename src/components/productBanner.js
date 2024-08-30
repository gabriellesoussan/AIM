import { useEffect, useState } from "react";

export default function ProductBanner({ content }) {
  console.log(content);

  function truncateDescription(description) {
    if (description.length <= 100) {
      return description;
    }
    return description.substring(0, 100) + '...';
  }

    return (
        <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-[1440px] lg:px-8 lg:py-16">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                    <h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        {content.heading}
                    </h2>
                </div>

                <div className="relative mt-8">
                    <div className="relative w-full overflow-x-auto">
                        <ul
                            role="list"
                            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                        >
                            {content.products?.data?.map((product) => {
                                return (
                                    <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                        <div className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                                                <img
                                                    src={product.images[0].src}
                                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                />
                                            </div>
                                            <div className="mt-10">
                                            <div
                                                className="prose prose-sm mt-4 text-gray-500"
                                                dangerouslySetInnerHTML={{ __html: truncateDescription(product.description)}}
                                                />
                                            </div>
                                            <div className="mt-6 items-center">
                                                <h3 className="mt-1 font-semibold text-gray-900">
                                                    <a href="www.shopify.com">
                                                        <span className="absolute inset-0" />
                                                        {product.title}
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}