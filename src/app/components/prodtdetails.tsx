import Image from "next/image";


export default function Productdetails(){


    return<div>
            <div className="">
               <div className=" font-normal text-4xl text-gray-900 font-custom pb-4 ">
                 <div className="flex justify-between">
                    Cheese – appareil à raclette 1/2 roue
                      <div className="">
                        <Image src="/heart.svg" alt="heart" width={40} height={40} className="mr-6"/>
                      </div>
                </div>
               </div>
                   <div className="flex">
                      <div className=" font-normal font-custom2 text-3xl text-gray-900  after:content-['\20AC']">
                        39.50 
                      </div>
                        <div className="font-sm text-gray-400 text-lg pl-3  ">
                           /piece
                        </div>
                   </div>
                     <div className="h-px w-full bg-gray-200 my-6 "></div>
                       <div className=" flex  justify-between ">
                         <div className="flex ">
                              <Image src="/ruler.svg" alt="ruler" width={40} height={40} className="pl-3"/>
                                 <div className="font-sm text-xl pl-2 ">
                                     20 <span className="align-super text-xs ">cm</span>
                                 </div>
                                   <Image src="/circle.svg" alt="daimeter" width={40} height={40} className="pl-3 " />
                                  <div className="font-sm text-xl pl-2 ">
                                      50 <span className="align-super text-xs">cm</span>
                                   </div>
                        </div>
                         <div className="text-gray-400 font-custom text-sm mr-6">
                           REF:VABGN5
                         </div>
                      </div>
                        <div className="h-px w-full bg-gray-200 my-6"></div> 
                           <div className=" max-w-lg text-base font-custome2 text-customcolor2 leading-relaxed">
                             Location appareil à raclette - Raclette traditionnelle 1/2 roue
                             <br />
                              Réglable en hauteur
                            <br />
                              Appareil à raclette professionnel
                            <br />
                             Boîtier de chauffe horizontal réglable en hauteur
                          </div>  
                             <div className="pt-6 text-lg text-customcolor2 mb-44">
                                220V
                              <br className=""/>
                                900W
                            </div>  
                          <div className="h-px w-full bg-gray-200 my-4"></div>
                            <div className=" flex  items-center gap-4 my-6">
                                <div className=" flex w-1/3 justify-between items-center rounded-lg px-4 py-2 border border-solid">
                                 <button className="text-xl font-bold text-gray-700">-</button>
                                   <span className="text-lg font-medium">1</span>
                                  <button className="text-xl font-bold text-gray-700">+</button> 
                                </div>
                                  <button className=" flex w-2/3 items-center justify-center bg-buttoncolor text-white font-button text-sm font-medium rounded-lg pb-3 pt-3 mr-6">
                                    Ajouter au panier
                                  </button>
                              </div>
            </div>   
              <div className=" flex w-full bg-[#FBF0F5] opacity-60 rounded-md px-4 py-4 justify-between mr-6 mb-2">
                  <div className="font-button text-lg text-black">Livraisons</div>
                  <div className=" text-xl font-semibold pr-6">+</div>
              </div>
              <div className=" flex w-full bg-[#FBF0F5] opacity-60 rounded-md px-4 py-4 justify-between mr-6 mb-6 ">
                     <div className="font-button text-lg text-black">Questions</div>
                     <div className=" text-xl font-semibold pr-6">+</div>
              </div> 
         </div>
        
} 