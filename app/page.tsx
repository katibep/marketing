import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Search } from "lucide-react"
import { SellerCard } from '@/components/seller-card'
import { CategoryCard } from '@/components/category-card'
import { NFTCard } from '@/components/nftcard'
import { getAllImages } from '@/actions/image'


const images = [
  {
    title: "art piece",
    image: "/me.jpg"
  },
];

export default async function Page() {
  const getAllImys = await getAllImages();
  return (
    <div className="  w-[100%] md:min-h-screen bg-gradient-to-b from-blue-950 to-purple-950">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              PLAY NFT
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-white hover:text-purple-400">
              Home
            </Link>
            
            <Link href="#" className="text-white hover:text-purple-400">
              Marketplace
            </Link>
            <Link href="#" className="text-white hover:text-purple-400">
              Artists
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10 bg-purple-950/50 border-purple-500/20 text-white w-64" placeholder="Search" />
          </div>
          <Link href={"regester"}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-[100%] p-0 md:px-6 md:py-12 grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="ml-[3px] text-2xl md:text-6xl font-bold text-white leading-tight">
            Discover, Collect and Sell Dope Art and NFTs
          </h1>
          <p className="text-gray-300 ml-[7px] text-[1rem] md:text-1g">
            The world's largest digital marketplace <br /> for crypto collections and non fungible tokens (NFTs)
          </p>
          <div className="flex  gap-1 ml-[8px] md:flex md:gap-4">
            <Link href={"https://www.youtube.com/results?search_query=discover+new+artwork+designs"}>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Discover
              </Button>
            </Link>
            <Link href={"/newimage"}>
            <Button className="text-black hover:bg-white bg-slate-300 ">
              Create
            </Button>
            </Link>
            <Link href={"https://youtu.be/JwaiZNbps4M?si=vBzYYMIxRLoLW2S-"}>
            <Button  className="text-red-900 bg-white">
              Watch video
            </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 ml-[2rem]   md:flex md:gap-8 pt-2 md:pt-4">
            <div>
              <div className="text-[1.50rem] md:text-3xl font-bold text-white">27k+</div>
              <div className="text-gray-400">Art works</div>
            </div>
            <div>
              <div className="text-[1.50rem] md:text-3xl font-bold text-white">20k+</div>
              <div className="text-gray-400">Auctions</div>
            </div>
            <div>
              <div className="text-[1.50rem] md:text-3xl font-bold text-white">7k+</div>
              <div className="text-gray-400">Artists</div>
            </div>
          </div>
        </div>
        <div className="relative w-[80%] ml-[2rem]">
          <NFTCard
            title="Delight"
            price="224 ETH"
            image="/sunset.jpg"
            artist="1h 20m 30s"
            className="w-full max-w-md mx-auto"
          />
        </div>
        
      </section>

      {/* Payment Partners */}
      <div className="grid grid-cols-1 md:flex gap-1 mt-[2rem] md:gap-4 p-3 grayscale opacity-100 md:p-[5rem]">
      {
        getAllImys?.map((image , i)=>{
          return(
            <div key={i} className="">
            <Image className='rounded-xl'
                src={image.image}
                alt="pic"
                width={265}
                height={212}
              />
              <p className='text-center text-white text-[1.50rem]'>{image.title}</p>
            </div>
              
          )
        })
      }
      </div>

      {/* Popular Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Popular this week</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <NFTCard
            title="Digital Decade"
            price="2.8 ETH"
            image="/sunset.jpg"
            artist="by Anthony gorgas"
            badge="50k"
          />
          {/* Add more NFT cards here */}
        </div>
      </section>

      {/* Explore Artworks */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Explore Artworks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         <Link href={""}>
         <CategoryCard
            title="Abstract"
            count="35 items"
            images={[
              "/art6.jpg",
              "/art2.jpg",
              "/art5.jpg",
            ]}
          />
         </Link>
         <Link href={""}>
         <CategoryCard
            title="3D Art"
            count="45 items"
            images={[
              "/art1.jpg",
              "/art2.jpg",
              "/art3.jpg",
            ]}
          />
         </Link>
         <Link href={""}>
         <CategoryCard
            title="Modern Art"
            count="95 items"
            images={[
              "/art4.jpg",
              "/art5.jpg",
              "/art6.jpg",
            ]}
          />
         </Link>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  )
}



