"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "../Assets/Icon/search-icon";
import Link from "next/link";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const frameworks = [
  {
    value: "سيارات للبيع",
    label: "سيارات للبيع",
    link: "/cars/cars-sale",
  },
  {
    value: "سيارات للإيجار",
    label: "سيارات للإيجار",
    link: "/cars/cars-rent",
  },
  {
    value: "منازل للبيع",
    label: "منازل للبيع",
    link: "/real-estate/houses-sale",
  },
  {
    value: "منازل للإيجار",
    label: "منازل للإيجار",
    link: "/real-estate/houses-rent",
  },
  {
    value: "astro",
    label: "فلل للبيع",
    link: "/real-estate/villas-sale",
  },
  {
    value: "فلل للإيجار",
    label: "فلل للإيجار",
    link: "/real-estate/villas-rent",
  },
  {
    value: "هواتف محمولة",
    label: " هواتف محمولة",
    link: "/mobiles",
  },
];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setLoggedIn(isLoggedIn);
    }
  }, []);

  const handleClick = () => {
    if (loggedIn) {
      // تسجيل خروج
      localStorage.removeItem("isLoggedIn");
      router.push("/");
      // window.location.reload()
  } else {
    // توجيه لصفحة تسجيل الدخول
    router.push("/log-in");
    // window.location.reload()
  }
  };
  return (
    <header className=" mb-[18rem] lg:mb-[16rem]  ">
      <div className=" fixe top-0 w-1  h-1 bg-[bisque] z-50 fixed   "></div>
      <div className="  fixed w-full     bg-white py-8  sm:px-40  px-10 flex flex-col gap-4  border border-b-gray-200 z-10  top-0 ">
        <div className="  flex items-center justify-end gap-6 ">
          <Link
            href={"/real-estate"}
            className=" text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2    "
          >
            عقارات
            <img
              alt="icon"
              src={"https://cdn-icons-png.flaticon.com/128/8743/8743467.png"}
              className=" w-6  "
              loading="lazy"
            />
          </Link>

          <Link
            href={"/cars"}
            className=" text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2"
          >
            السيارات
            <img
              alt="icon"
              src={"https://cdn-icons-png.flaticon.com/128/2962/2962303.png"}
              className=" w-6"
              loading="lazy"
            />
          </Link>

          <Link
            href={"/"}
            className=" font-semibold text-2xl italic cursor-pointer"
          >
            SAHAB
          </Link>
        </div>
        <div className=" flex flex-col sm:flex-row-reverse  flex-wrap gap-4  justify-between  items-center    ">
          {/* <button className='  text-black font-bold text-[1.1rem]   hover:text-blue-600'>English</button> */}

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="xl:w-[40rem] lg:w-[30rem] md:w-[25rem] w-[17rem]  justify-between h-[3rem]  "
                dir="rtl"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "أبحث عن السيارات , الهواتف و أكثر ..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="  xl:w-[40rem]  lg:w-[30rem] md:w-[25rem] w-[17rem]   p-0">
              <Command>
                <CommandInput
                  placeholder="أبحث..."
                  className="h-9 "
                  dir="rtl"
                />
                <CommandList>
                  <CommandEmpty>.لا يوجد</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <Link href={`${framework.link}`} key={framework.value}>
                        <CommandItem
                          dir="rtl"
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <div className=" flex justify-between items-center gap-16    ">
            
            <Link 

            href={isLoggedIn  ? "/dashboard" : "/log-in"}
              className=" bg-blue-600 hover:bg-blue-700 sm:px-4 sm:py-3 p-2  rounded-md text-white  text-[0.9rem] sm:text-[1.2rem]  "
            >
              انشر إعلانك
            </Link>
            <button      
      onClick={handleClick}
      className={`sm:text-[1.3rem] text-[0.9rem] font-semibold   ${
        isLoggedIn ? "underline decoration-red-600 underline-offset-8 hover:no-underline" : "underline decoration-blue-600 underline-offset-8 hover:no-underline"
      }`}
    >
      {isLoggedIn ? "تسجيل خروج" : "تسجيل دخول"}
    </button>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <Link
            href={"/mobiles"}
            className=" font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer "
          >
            موبايلات و تابلت
          </Link>
          <Link
            href={"/real-estate"}
            className={` font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222]  `}
          >
            عقارات
          </Link>
          <Link
            href={"/cars"}
            className=" font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer "
          >
            سيارات
          </Link>
        </div>
      </div>
    </header>
  );
}
