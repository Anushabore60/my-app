import Image from "next/image"
import Bottomgrid from "./bottomcomponent"

type Dispatchprops={
    lable1: string,
    label2: string,
    image: string
}

export  function Dispatch({lable1,label2,image}:Dispatchprops){

    return<div className="">
              <div className="flex justify-center items-center w-[150px] h-[130px]  ">
                 <div className="">
               <div className="  flex items-center justify-center w-[51px] h-[56px] ">
                 <Image src={image} alt="label1" width={51} height={56} />
               </div>
                 <div className="flex items-center justify-center font-custom2 text-lg align-middle text-customgray p-1">
                      {lable1}
                 </div>
                    <div className=" flex items-center justify-center  font-custom2 text-sm align-middle text-customcolor4">
                       {label2}
                    </div>
              </div>
            </div>
        </div>
}

export default function Dispacthitems(){


  return<div>
            
           <div className=" bg-customcolor3  z-0  ">
                  
                   <div className="relative z-10">                 
                    <div className="mt-24">
                     <div className="font-custom3 text-customgray text-2xl flex  justify-center items-center  ">
                             On s’occupe de<span className="text-[#5CD2DD;] pl-1"> tout</span>
                      </div>
                        <div className="font-custom2 text-sm text-customcolor4 flex  justify-center items-center">
                             Office ipsum you must be muted. It meeting commitment busy pain.
                        </div>
                     </div>
                       <div className=" flex  justify-center grid-cols-4  items-center mt-12 gap-12">
                         <Dispatch lable1="Livraison & Reprise" label2="Selon vos besoins" image="/shipping1.svg"/>
                         <span className="h-px w-8 bg-gray-300"></span>
                         <Dispatch lable1="Nettoyage" label2="Selon vos besoins" image="/shipping2.svg"/>
                         <span className="h-px w-8 bg-gray-300"></span>
                         <Dispatch lable1="Commande Illimitée" label2="Tout est possible" image="/shipping3.svg"/>
                         <span className="h-px w-8 bg-gray-300"></span>
                         <Dispatch lable1="Transport & Enlèvement" label2="On s’occupe de tout" image="/shipping4.svg"/>
                       </div>
                          <Bottomgrid/>
                   </div>
                </div> 
                
                
       </div>
}

