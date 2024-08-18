import { FaArrowRight } from "react-icons/fa";

const Cover = () => {
    return (
        <div className="bg-violet-200 h-[500px] container mx-auto">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-6xl ">How can we help?</h1>
                <label className="input input-bordered flex items-center gap-2 w-5/12 mt-6 relative">
                    <input type="text" className="w-full py-4 px-6 rounded-lg" placeholder="Search" />
                    <FaArrowRight className="absolute right-5"/>                   
                </label>
            </div>



        </div>
    );
};

export default Cover;