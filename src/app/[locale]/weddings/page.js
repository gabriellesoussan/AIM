"use client"
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page({ params }) {
    const [isLoading, setIsLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        //onEntryChange(getContent);
    }, []);

    function submit(e) {
        e.preventDefault();
        localStorage.setItem('segment', 'wedding');
        setDialogOpen(true);
    }

    if (isLoading) return;

    return (
        <div>
            <Transition.Root show={dialogOpen} as={Fragment}>
                <Dialog className="relative z-10" onClose={setDialogOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Submission successful
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Thank you for your submission. Our wedding specialist will contact you soon.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => setDialogOpen(false)}
                                        >
                                            OK
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Header locale={params.locale} />
            <div className="flex max-w-7xl mx-auto px-8 gap-8">
                <div className="w-1/2">
                    <img src="https://images.contentstack.io/v3/assets/blt48306f59988eafb6/blt4710f7c323b5f688/6643e81266b81d1c1f33e87b/wedding_arch.jpeg" />
                </div>

                <div className="w-1/2 my-auto">
                    <p className="text-[3.5rem] font-cinzel tracking-widest text-neutral-700">WEDDINGS</p>
                    <p className="text-[1.125rem] font-poppins font-light leading-8">Are you planning a destination wedding? Our wedding planners can assist! Complete the form below and we&apos;ll contact you and begin your journey.</p>
                </div>
            </div>

            <div className="mt-16  max-w-7xl mx-auto px-8 font-poppins">
                <div className="w-full  bg-[#F0F9FF]  text-black">
                    <p className="text-3xl pt-5 text-center font-light">Schedule an appointment</p>
                    <p className="text-[1.125rem] mt-5 text-center font-light">If you are ready to order or need help with ideas, we can help. We can be your guide for designs, flavors, colors, and more.</p>

                    <div className="max-w-xl mx-auto">
                        <div className="space-y-12">
                            <form className=" pb-12">

                                <div className="mt-10">

                                    <label htmlFor="username" className="block text-sm font-light leading-6 ">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="p-2 w-64 text-black"
                                        />
                                    </div>

                                    <label htmlFor="username" className="block text-sm font-light leading-6 mt-8">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="p-2 w-64 text-black"
                                            placeholder="jane.doe@example.com"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <label htmlFor="about" className="block text-sm font-light leading-6 ">
                                            Wedding date and details
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="block w-full p-2 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => submit(e)}
                                        className="border border-2-white py-2 px-4 mt-8 bg-white hover:bg-transparent">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}