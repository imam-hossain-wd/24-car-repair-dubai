import Link from "next/link";




export default function Logo() {
    return (
        <div>
            <Link href="/" className="flex justify-center items-center  text-yellow-500 flex-col p-2 rounded font-bold leading-tight">
            {/* Main Logo Text */}
            <div className="text-3xl  bg-clip-text text-transparent 
      bg-[#FFC300]">
                24 
            </div>

            {/* Dubai Subtext */}
            <div className="self-end text-2xl  font-bold  -mt-1">
               CAR REPAIR DUBAI
            </div>
        </Link>
        </div>
    )
}
