import RecivedMessege from "./RecivedMessege";
import SentMessege from "./SentMessege";

export default function Chat() {
    return (
        <div className="bg-zinc-600 w-2/3 border-l-2 border-l-white fixed right-0 top-0 flex flex-col" style={{
            height: "100vh",
            alignItems: "center",
            
        }}>
            <div className="p-2 w-full bg-zinc-800">
                <div className="h-14  mb-1 flex cursor-pointer" style={{ alignItems: "center" }}>
                    <div className="bg-gray-200 h-10 w-10 rounded-full text-center text-2xl">
                        A
                    </div>
                    <div className="text-justify ml-3 text-white" style={{
                        width: "27vw"
                    }}>

                            <div className="">Ahmed Ali</div>

                       

                        <p className="">last seen yesterday</p>
                    </div>

                </div>
            </div>


            {/* <SentMessege/>
            <RecivedMessege/> */}
            <div className="absolute bottom-5 w-full">

            <input type="text" className="border-2 border-white rounded-xl h-10 w-1/2 bg-zinc-600 text-white mr-5">
            </input>
            <button className="bg-zinc-500 p-1.5 rounded-xl border-white border-2 text-white cursor-pointer">
                send
            </button>
            </div>
        </div>
    );
}