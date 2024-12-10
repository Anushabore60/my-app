import Image from "next/image"

export default function Bottomgrid(){

    return<div className="">
             <div className="flex gap-4 grid-cols-2 pl-12 pr-12 justify-center  mt-36 ">
                <div className=" rounded-xl  w-1/2 h-[300px] overflow-hidden">
                    <div>
                      <Image src="/imagesofa.svg" alt="sofa image" width={900} height={300} className="object-cover"/>
                    </div>
                </div>
                  <div className=" bg-pink-100 opacity-70 font-custom2  w-1/2 h-[300px] rounded-xl text-black text-2xl pt-10 relative ">
                    <div className="pl-12">
                       S&apos inscrire & économiser <span className="text-[#5CD2DD;] pl-1">10%</span>
                    </div>
                     <div className=" text-[#BDA2B0] text-sm font-custom2 px-4 py-4 pl-12">
                        Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn &apost.
                        <br/> Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy
                        <br/> highlights lunch. Company another pushback items dear or any.
                     </div>
                        
                       <div className="flex flex-grow w-2/3 mt-6 gap-2 ml-12">
                         <input
                         type="text"
                         placeholder="john@doe.com"
                         className="border border-x-2 bg-white rounded-md p-2 text-[#A68A98] text-[18px]"
                          />
                          <button className=" w-1/3 bg-[#5CD2DD] text-white rounded-md  font-custom3 text-lg flex items-center justify-center pl-2 hover:scale-105 ">
                             S&apos inscrire
                               <Image  src="/rightarrow.svg" alt="rightarrow" width={22} height={22} className=""/>  
                          </button>
                       </div>
                  </div>
             </div>
         </div>
}
