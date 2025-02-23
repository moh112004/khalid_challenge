import Contact from "./Contact";

export default function Contacts() {
    return (
        <div className="bg-zinc-700 w-1/3">
            <div className="flex justify-between p-4 fixed w-1/3 bg-zinc-800" >
            <div className="p-2">
                <div className="bg-white h-0.5 w-5 mb-1"></div>
                <div className="bg-white h-0.5 w-5 mb-1"></div>
                <div className="bg-white h-0.5 w-5"></div>
            </div>
            <input type="text" className="border-2 border-white rounded-xl w-3/4 bg-zinc-700 text-white">
            </input>

            </div>
            <div className="pt-20 overflow-y-auto overflow-x-hidden">

            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            </div>
        </div>
    );
}