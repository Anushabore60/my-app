import Centertablecard from "./tablecard";

 
type similarproductsprops={
    label:string
}

 export default function Headersection({label}:similarproductsprops){

    return<div className="mb-10">
             <div className="flex justify-between">
               <div className="font-custom2 text-customgray text-2xl pl-6 ">
                 {label}
               </div>
               <div className="font-custom2 text-customgray text-sm underline pr-10">
                 VOIR TOUTE LA COLLECTION
               </div>
             </div>
               
         </div>
 }