"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function Header({ color, locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entry, setEntry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs("header",
    locale,
    ["menu_items.page"]);
    // console.log('header', [0][0]);
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

  return (
    <div
      className={
        "h-20 flex justify-between w-full font-poppins py-4 px-8 " +
        (color === "white" ? "text-white" : "text-black")
      }
    >
      <a href="/">
        {color === "white" && (
          <img className="h-8 w-auto" src={entry.light_logo?.url} />
        )}
        {color !== "white" && (
          <img className="h-8 w-auto" src={entry.dark_logo?.url} />
        )}
      </a>

      <div className="flex lg:hidden">
        <button className="" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      <div className="hidden gap-12 lg:flex uppercase my-auto">
        {entry.menu_items?.map((item, index) => (
          <a key={index} href={item.page.length > 0 ? item.page[0].url : "#"}>
            {item.text}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex my-auto">
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
            className="cursor-pointer ms-auto text-black"
            type="button"
            onClick={() => setMenuOpen(false)}
          >
            <XMarkIcon className="h-10" />
          </button>
        </div>
        <div className="flex flex-col text-black text-2xl leading-10 uppercase">
          {entry.menu_items?.map((item, index) => (
            <a key={index} href={item.page.length > 0 ? item.page[0].url : "#"}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
