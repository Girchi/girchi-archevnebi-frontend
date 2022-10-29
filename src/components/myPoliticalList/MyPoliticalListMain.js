import { useState } from "react";
import photo from "../../assets/images/profile.jpeg"
import AddCandidate from "./myPoliticalListMainComponents/AddCandidate";

const MyPoliticalListMain = () => {

  const [chosen, setChosen] = useState(null);

  console.log("archeuli candidati", chosen)

    return (
        <>
            {/* list */}
            <div className="flex flex-col py-10">
                {/* stage list */}
                <div className="w-full border-t-2 border-borderGray">
                    {/* item */}
                    <div className="flex py-6  items-center justify-between">
                        <div className="font-[Inter] w-4 font-semibold text-sm text-lightBlack">1</div>
                        {/* profile */}
                        <div className="flex grow ml-6">
                            <img src={photo} alt="" className="w-12 h-12 rounded-2xl border-4 border-solid border-[#d3d6db3d]" />
                            <div className="ml-4">
                                <p className="font-[TBCContractica] font-medium text-base text-lightBlack">ვარლამ პანჭურაძე</p>
                                <p className="font-[TBCContractica] text-sm text-lightGray"><span className="font-[Inter]">3 250</span> მხარდამჭერი</p>
                            </div>
                        </div>
                        {/* settings */}
                        <div className="flex items-end" id="settings">
                            <div className="flex flex-col max-w-[267px]">
                                <p className="font-[TBCContractica] font-medium text-xs text-lightBlack">მხარდაჭერი თანხა</p>
                                <div className="mt-1.5 flex border-[1px] justify-between rounded-md py-3.5 px-3 text-sm">
                                    <input className="w-1/2 focus:outline-0 text-[Inter] text-sm text-lightBlack font-medium" type="text" placeholder="92 000 GED"/>
                                    <div className="flex">
                                        <label htmlFor="small-toggle" className="cursor-pointer font-[TBCContractica] text-sm text-lightGray mr-2.5">პროცენტი</label>
                                        <label htmlFor="small-toggle" className="inline-flex relative items-center cursor-pointer">
                                            <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1A8917]"></div>
                                        </label>
                                    </div>     
                                </div>
                            </div>
                            <div className="p-4 ml-3 rounded-md bg-lightGrayButton cursor-pointer">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z" fill="#727A82"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="flex py-6  items-center justify-between">
                        <div className="font-[Inter] w-4 font-semibold text-sm text-lightBlack"></div>
                        {/* profile */}
                        <div className="flex grow ml-6">
                            <img src={photo} alt="" className="w-12 h-12 rounded-2xl border-4 border-solid border-[#d3d6db3d]" />
                            <div className="ml-4">
                                <p className="font-[TBCContractica] font-medium text-base text-lightBlack">ვარლამ პანჭურაძე</p>
                                <p className="font-[TBCContractica] text-sm text-lightGray"><span className="font-[Inter]">3 250</span> მხარდამჭერი</p>
                            </div>
                        </div>
                        {/* settings */}
                        <div className="flex items-end" id="settings">
                            <div className="flex flex-col max-w-[267px]">
                                <p className="font-[TBCContractica] font-medium text-xs text-lightBlack">მხარდაჭერი თანხა</p>
                                <div className="mt-1.5 flex border-[1px] justify-between rounded-md py-3.5 px-3 text-sm">
                                    <input className="w-1/2 focus:outline-0 text-[Inter] text-sm text-lightBlack font-medium" type="text" placeholder="92 000 GED"/>
                                    <div className="flex">
                                        <label htmlFor="small-toggle2" className="cursor-pointer font-[TBCContractica] text-sm text-lightGray mr-2.5">პროცენტი</label>
                                        <label htmlFor="small-toggle2" className="inline-flex relative items-center cursor-pointer">
                                            <input type="checkbox" value="" id="small-toggle2" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1A8917]"></div>
                                        </label>
                                    </div>     
                                </div>
                            </div>
                            <div className="p-4 ml-3 rounded-md bg-lightGrayButton cursor-pointer">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z" fill="#727A82"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <AddCandidate setChosen={setChosen} />
            </div>
        </>
    )
}

export default MyPoliticalListMain;