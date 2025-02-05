interface CategoryCardProps {
    title: string
    count: string
    images: string[]
  }
  
  export function CategoryCard({ title, count, images }: CategoryCardProps) {
    return (
      <div className="group cursor-pointer">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <img src={images[0] || "/placeholder.svg"} alt="" className="w-full h-40 object-cover rounded-lg" />
            </div>
            <img src={images[1] || "/placeholder.svg"} alt="" className="w-full h-24 object-cover rounded-lg" />
            <img src={images[2] || "/placeholder.svg"} alt="" className="w-full h-24 object-cover rounded-lg" />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{count}</p>
          </div>
        </div>
      </div>
    )
  }
  
  