import Image from "next/image"



export default function Centertablecard(){


    return <div className="w-[330px] h-[438px]  hover:scale-105">
             <div className="w-[330px] h-[362px] bg-customcolor3 radius-md pl-6 pr-6 pt-2 pb-8">
                <div className="flex justify-between p-4">
                    <div className="">
                       <Image src="/heart.svg" alt="heart svg" width={28} height={28} className="" />
                    </div>
                    <div className="font-custom2 text-xs  text-slate-900">
                      ART DE LA TABLE
                    </div>
                </div>   
                  <div className="flex justify-center items-center">
                    <Image src="/centertable.png" alt="centertable" width={224} height={224} className="mix-blend-plus-darker"/>
                  </div>
              </div> 
                <div className=" flex justify-between pl-4 pr-4 pt-4">
                   <div className=" font-custom font-medium  text-customgray text-2xl">
                     Title
                   </div>
                   <div className=" flex font-custom2 text-gray-700 font-medium text-3xl ">
                     0
                    <div>
                      <span className="font-custom2 text-gray-600 align-super text-sm before:content-['\20AC'] before:mr-2"></span>
                     </div>
                   </div>
                </div>
                <div className="flex justify-between pl-4 pr-4 pb-4">
                  <div className=" font-custom2 font-sm text-customcolor4 ">
                    <span className="after:content-['\20AC'] after:mr-1 ">0.35</span>
                    /Pièce
                    <span className="text-xs"> · RÉF : VABGN5</span>
                  </div>
                    <div className=" flex w-[68px] h-[26px] rounded-lg bg-customcolor5 text-sm text-[#546A7D] justify-center items-center ">
                       20pieces
                    </div>
                </div>
        </div>
}