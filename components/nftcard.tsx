interface NFTCardProps {
    title: string
    price: string
    image: string
    artist: string
    badge?: string
    className?: string
  }
  
  export function NFTCard({ title, price, image, artist, badge, className = "" }: NFTCardProps) {
    return (
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20">
          <div className="aspect-[3/4] relative">
            <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <span className="text-purple-400">{price}</span>
            </div>
            <p className="text-gray-400 text-sm">{artist}</p>
          </div>
          {badge && (
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-2 py-1 rounded-full">{badge}</div>
          )}
        </div>
      </div>
    )
  }
  
  