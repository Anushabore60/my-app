import Image from "next/image"
import Productdetails  from "../components/prodtdetails"

export default function Productpage(){

    return <div className="grid grid-cols-2 gap-10 mb-14">
              <div className="">
                 <div className="bg-customcolor rounded-lg w-50% h-[652px] top-[231px] left-30px ">
                    <div className="flex justify-center items-center">
                       <Image src="/image.png"alt="product-image" width={552} height={552} className="relative top-[50px]  blend-multiply" />
                    </div>
                      <div className=" absolute top-[110px] left-[30px] gap-0 rounded-sm w-55px h-55px; left-40px">
                         <Image src="/centertable.png" alt="center-table" width={40} height={40} className="mix-blend-plus-darker pb-6"/>
                       </div>
                          <div className=" absolute top-[140px] left-[30px] gap-0 rounded-sm w-55px h-55px; left-40px">
                            <Image src="/centertable.png" alt="center-table" width={40} height={40} className="mix-blend-plus-darker opacity-50 "/>
                          </div>
                             <div className=" absolute top-[180px] left-[30px] gap-0 rounded-sm w-55px h-55px; left-40px">
                                <Image src="/centertable.png" alt="center-table" width={40} height={40} className="mix-blend-plus-darker opacity-50 "/>
                             </div>
                                <div className=" absolute top-[210px] left-[30px] gap-0 rounded-sm w-55px h-55px; left-40px">
                                   <Image src="/centertable.png" alt="center-table" width={40} height={40} className="mix-blend-plus-darker opacity-50 "/>
                                 </div>
                            </div>
                              <div className="font-button text-gray-900 font-normal  text-xl mt-12 pl-4 mb-4">
                                  Description produit
                              </div>
                               <div className=" text-customcolor4 font-custom2 text-xs pl-4">
                                  Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 €
                               <br/>
                                  / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet
                               <br/>
                                  d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous
                                <br/>
                                  sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une
                                <br/>
                                   série d'autre produit à louer de ce type dans la catégorie "Art de la
                                <br/>
                                    Table"
                               </div>
                        </div>
                          <div className="pl-4">
                             <Productdetails />
                          </div>
          </div> 
}