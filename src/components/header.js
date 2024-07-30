"use client";
import { Fragment, useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { Disclosure, Popover, Transition } from "@headlessui/react";

export default function Header({ color, locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entry, setEntry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs("header", locale, [
      "menu_items.page",
      "menu_items.sub_items.page",
    ]);
    // console.log("header", entry[0][0]);
    setEntry(entry[0][0]);
    setIsLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (isLoading) return;

  function changeLang(language) {
    router.push("/" + language);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className={
        "h-20 flex justify-between w-full font-poppins py-4 px-8 " +
        (color === "white" ? "text-white" : "text-neutral-700")
      }
    >

      <a href="/" className='h-36 w-24 my-auto'>DTCC</a>
     {/*  <a href="/" className="my-auto">
        {color === "white" && (
          <img className="h-20 w-auto" src={entry.light_logo?.url} />
        )}
        {color !== "white" && (
          <img className="h-6 w-auto" src={entry.dark_logo?.url} />
        )}
      </a> */}

      <div className="flex lg:hidden">
        <button className="" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      <div className="hidden gap-12 lg:flex uppercase my-auto">
        {entry.menu_items?.map((item, index) => {
          if (item.sub_items?.length > 0) {
            return (
              <Popover key={index} className="relative">
                <Popover.Button className="uppercase flex items-center outline-none bg-transparent">
                  {item.text}
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute top-full right-0 z-10 mt-3 overflow-hidden rounded-lg bg-white shadow-lg ">
                    <div className="p-4 text-neutral-700 flex flex-col gap-2">
                      {item.sub_items.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.page.length > 0 ? sub.page[0].url : "#"}
                          className="text-nowrap font-light"
                        >
                          {sub.text}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            );
          } else {
            return (
              <a
                key={index}
                href={item.page.length > 0 ? item.page[0].url : "#"}
              >
                {item.text}
              </a>
            );
          }
        })}
      </div>

      <div className="hidden lg:flex my-auto" style={{width: '150px', justifyContent: 'end'}}>
        {/* <a href="#">Log in <span>&rarr;</span></a> */}
        <select
          className="outline-none bg-transparent"
          value={locale}
          onChange={(e) => {
            changeLang(e.target.value);
          }}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
      </div>

      <div
        className={`p-5 right-0 top-0 w-full z-50 duration-200 ease-in-out bg-white fixed h-full ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-right">
          <button
            className="cursor-pointer ms-auto text-neutral-700"
            type="button"
            onClick={() => setMenuOpen(false)}
          >
            <XMarkIcon className="h-10" />
          </button>
        </div>
        <div className="flex flex-col text-neutral-700 text-2xl leading-10 uppercase">
          {entry.menu_items?.map((item, index) => {
            if (item.sub_items?.length > 0) {
              return (
                <Disclosure as="div" className="-mx-3" key={index + item.text}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center pl-3 pr-3.5 uppercase">
                        {item.text}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "ml-2 h-7 w-7 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 pb-2">
                        {item.sub_items.map((item, index) => (
                          <Disclosure.Button
                            key={index + item.text}
                            as="a"
                            href={item.page[0]?.url}
                            className="block rounded-lg pt-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.text}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            } else {
              return (
                <a
                  key={index}
                  href={item.page.length > 0 ? item.page[0].url : "#"}
                >
                  {item.text}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
