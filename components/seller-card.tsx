interface SellerCardProps {
    name: string
    amount: string
    image: string
  }
  
  export function SellerCard({ name, amount, image }: SellerCardProps) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20">
        <img src={image || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-sm text-gray-400">{amount}</p>
        </div>
      </div>
    )
  }
  
  