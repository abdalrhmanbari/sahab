"use client"
import React from 'react'
import SearchIcon from '../Assets/Icon/search-icon'
import Link from 'next/link'
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const frameworks = [
{
  value: "سيارات للبيع",
  label: "سيارات للبيع",
  link:"/cars/cars-sale"
},
{
  value: "سيارات للإيجار",
  label: "سيارات للإيجار",
  link:"/cars/cars-rent"
},
{
  value: "منازل للبيع",
  label: "منازل للبيع",
  link:"/real-estate/houses-sale"
},
{
  value: "منازل للإيجار",
  label: "منازل للإيجار",
  link:"/real-estate/houses-rent"
},
{
  value: "astro",
  label: "فلل للبيع",
  link:"/real-estate/villas-sale"
},
{
  value: "فلل للإيجار",
  label: "فلل للإيجار",
  link:"/real-estate/villas-rent"
},
{
  value: "هواتف محمولة",
  label: " هواتف محمولة",
  link:"/mobiles"
},
]
export default function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <header className=' '>
      <div className=' fixe top-0 w-1  h-1 bg-[bisque] z-50 fixed   '></div>
    <div className='  fixed w-full     bg-white py-8  px-40 flex flex-col gap-4  border border-b-gray-200 z-10  top-0 '>
    <div className='  flex items-center justify-end gap-6 '>
          <Link href={"/real-estate"} className=' text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2    '>
         عقارات
      <img alt='icon' src={"https://cdn-icons-png.flaticon.com/128/8743/8743467.png"} className=' w-6  ' loading='lazy'/>
          </Link>

      
          <Link href={"/cars"} className=' text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2'>
          السيارات
          <img alt='icon' src={"https://cdn-icons-png.flaticon.com/128/2962/2962303.png"} className=' w-6' loading='lazy'/>
          </Link>
      

      <Link href={"/"} className=' font-semibold text-2xl italic cursor-pointer'>SAHAB</Link>
    </div>
    <div className=' flex flex-col sm:flex-row  justify-between  items-center    '>
      <Link href={"/log-in"} className=' bg-blue-600 hover:bg-blue-700 px-4 py-4 rounded-md text-white'>انشر إعلانك</Link>
    <Link href={"/log-in"} className=' text-[1rem] font-semibold underline decoration-blue-600 underline-offset-8 hover:no-underline '>تسجيل دخول </Link>
    {/* <button className='  text-black font-bold text-[1.1rem]   hover:text-blue-600'>English</button> */}

      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[60%] justify-between h-[3rem]"
          dir='rtl'
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "أبحث عن السيارات , الهواتف و أكثر ..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[50rem] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <Link href={`${framework.link}`}  key={framework.value}>
                <CommandItem
                 
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  >
             
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
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

          </div>
                  <div className=' flex justify-between items-center'>
                  <Link   href={"/mobiles"} className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>موبايلات و تابلت</Link>
                    <Link href={"/real-estate"} className={` font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222]  `}>عقارات</Link>
                    <Link href={"/cars"} className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>سيارات</Link>
                  </div>
  </div>
          </header>
  )
}
