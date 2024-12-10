import Image from "next/image"
type footerprops={
 label1:string,
 label2: string,
 label3: string,
 label4: string,
 label5: string
}

export function Footercomponent({label1,label2, label3, label4, label5}:footerprops){
    return <div className="pl-4">
            <div className="font-custom2 text-customgray text-md p-2 ">
               {label1}
             </div>
             <div className=" font-custom2 text-sm text-customgray p-2 ">
                <div className="hover:underline cursor-pointer"> {label2}</div>
                <div className="hover:underline cursor-pointer"> {label3}</div>
                <div className="hover:underline cursor-pointer"> {label4}</div>
                <div className="hover:underline cursor-pointer"> {label5}</div>
             </div>
         </div> 
}
  
    export default  function Footercomponent2(){
        return<div className=" flex justify-between"> 
                <div className=" flex ">
                    <div className="w-[150px] h-[150px] hover:cursor-pointer pl-8">
                       <Image src="/logo.svg" alt="logo" width={133} height={65}/> 
                    </div>
                    <div className="flex ">
                        <Footercomponent label1="INFOS PRATIQUES" label2="À propos" label3="Livraisons & Reprises" label4="Mode d’emploi" label5="F.A.Q" />
                        <Footercomponent label1="LÉGAL" label2="Mentions légales" label3="CGU" label4="CGV" label5="Politique de confidentialité" />
                        <Footercomponent label1="MON COMPTE" label2="Accéder à mon compte" label3="Ma liste d’envie" label4="Créer un compte" label5="Mot de passe oublié" />
                    </div>
                </div>
                <div>
                  <div className="font-custom2 text-customgray text-md p-2 pr-12">
                     NOUS SUIVRE
                  </div> 
                  <div className=" flex gap-3 pr-12">
                  <div className=" w-42 h-42 rounded-md border p-4 hover:scale-105 cursor-pointer ">
                     <Image src="/x.svg" alt="twitter handle" width={22} height={22} className="  " />
                  </div>
                  <div className="w-42 h-42 rounded-md border p-4 hover:scale-105 cursor-pointer">
                     <Image src="/insta.svg" alt="insta handle" width={22} height={22} className="  " />
                  </div>
                  <div className="w-42 h-42 rounded-md border p-4 hover:scale-105 cursor-pointer">
                     <Image src="/linkedin.svg" alt="linkedin handle" width={22} height={22} className="  " />
                  </div>
                  
                    </div>
                </div>
             </div>
    }
