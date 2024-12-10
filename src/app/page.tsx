import Header from "./pages/header";
import Productpage from "./pages/product";
import Centertablecard from "./components/tablecard";
import Similarproducts from "./components/similarproducts";
import Scrollanimation from "./components/scroll";
import Dispatchitems from "./components/dispatch";
import Footercomponent2 from "./components/footer";


export default function Home() {
  return <div className="">
              <Header/>
              <Productpage/>
              <Similarproducts label="Articles similaires" />
              <Scrollanimation />
              <div className="mt-12">
                 <Similarproducts label="Ces produits pourraient vous intéresser" />
                   <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
                     <Centertablecard/>
                     <Centertablecard/>
                     <Centertablecard/>
                     <Centertablecard/> 
                   </div>
              </div>
                <Dispatchitems />
                <div className="h-px w-full bg-gray-200 my-6 mt-36"></div> 
                <Footercomponent2 />
              </div>
              
   
     
     

}
