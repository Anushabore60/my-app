import Image from "next/image"

 export default function Header(){
  return <header className="bg-gray-50 border-b border-gray-300">
     
      <div className="w-full flex  justify-between pl-10 pr-10 ">
        <div className="flex">
        <div className="mr-8 ">
          <img src="/logo.svg" alt="Logo" width={133} height={65} className="" />
        </div>
          <div className=" relative flex items-center">
          
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-96  px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            /> 
          </div>
          </div>
          <div className=" relative flex items-center space-x-4">
          
          <div className="flex gap-2">
          <Image src="/bulb.svg" alt="inspo" width={14} height={14}/>
          <a
            href="#"
           
            className="text-gray-600 hover:text-blue-600 transition text-sm"
          >
            Inspirations
          </a>
          </div>
          <div className="flex gap-2">
           <Image src="/heart.svg" alt="heart" width={14} height={14}  />
         
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition text-sm"
          >
            Mes Favoris
          </a>
          </div>
          <div className="flex ">
          
          <a
            href="#"
            className=" flex bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition gap-2"
          ><Image src="/cart.svg" alt="cart" width={14} height={14}  />
            Panier
          </a>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <span>FR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            </div>
          </div>
      </div>
      <nav className="">
        <div className="w-full justify-between  mx-auto flex space-x-6 p-2 pl-10 pr-10">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            ART DE LA TABLE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            MOBILIER
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            NAPPAGE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          MATERIAL DE SALLE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            CUISINE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            BARBECUE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          TENTE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          CHAUFFAGE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          PODIUM - PISTE DE DENSE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          SON ET LUMIERE
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          PACKS
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          CONSOMMABLES
          </a>
          
        </div>
      </nav>
    </header>
  
}


