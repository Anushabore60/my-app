import Centertablecard from "./tablecard"

export default function Scrollanimation(){

    return <div>
              <div className=" mt-6 overflow-x-auto">
                 <div className=" flex  gap-10 snap-mandatory snap-x ">
                    <div className="snap-center ">
                        <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                    <div className="snap-center ">
                      <Centertablecard />
                    </div>
                 </div>
              </div>
    </div>
}