import { useState } from "react";
export default function App(){

    const [count , setCount] = useState("0");
    function decHandler(){
        setCount(count-1);
    }
    function incHandler(){
        setCount(count+1);
    }

    function resetHandler(){
        setCount(0);
    }
    return (
        <div className="w-[100vw] h-[100vh] bg-[#380140] flex flex-col justify-center items-center gap-10 ">
            <div className="text-blue-300 text-2xl">
                Increment and Decrement app
            </div>
            <div className="flex bg-blue-300 gap-12 text-[1.5rem] text-[#380140]">
                <button className="px-[20px] my-[5px] border-r-[1.5px] border-[#380140]"  onClick={decHandler}>
                    -
                </button>
                <button>
                    {count}
                </button>
                <button className="px-[20px] my-[5px] border-l-[1.5px] border-[#380140]" onClick={incHandler}>
                    +
                </button>
            </div>
            <button className="bg-[#A192A6] w-[90px] text-xl py-2 rounded-sm"  onClick={resetHandler}>
                Reset
            </button>
        </div>
    );
}