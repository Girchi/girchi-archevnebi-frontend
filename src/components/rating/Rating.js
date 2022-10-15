/* eslint-disable jsx-a11y/alt-text */
import search from '../../assets/images/search.svg';
import { useState } from 'react';
import SupporterModal from './SupporterModal';

const Rating = () => {

    const [showModal, setShowModal] = useState(false)
    
    return ( 
        <>
            {showModal && <SupporterModal setShowModal={setShowModal} />}
            
            <div className="w-[1002px] bg-white rounded-lg p-[40px] ">
                <div className='flex'>
                    <div className='w-[567px]'>
                        <h2 className='uppercase text-lightBlack font-bold text-[20px] leading-[24px] mb-1'>გირჩის პარტიული სია</h2>
                        <p className='text-lightGray font-medium text-[14px] leading-[24px]'>გირჩის პოტენციური პარტიული კანდიდატები და რეიტინგი</p>
                    </div>
                    <div className='flex grow items-center w-[323px] border-[1px] border-[#E0E2E7] rounded-md pt-3 pr-2.5 pb-3 pl-3'>
                        <img className='w-5 h-5 mr-2' src={search} alt="search"/>
                        <input className='outline-none text-sm' type="text" name="search" placeholder='პოლიტიკოსის ძიება'/>
                    </div>
                </div>
                
                <div className="mt-8">
                    <table className="w-full text-right text-sm   text-gray-500">
                        <thead className="text-xs  text-gray-700 uppercase bg-gray-50">
                            <tr >
                                <th className=" text-[#727A82] w-2 text-left py-3 pl-6 "> 
                                     #
                                </th>
                                <th  className="py-3">
                                    <div className="flex justify-start font-medium text-[#727A82] text-[14px] leading-[24px]">
                                    პოლიტიკოსი
                                    </div>
                                </th>
                                <th className="py-3">
                                    <div className="flex justify-start items-center font-medium text-[#727A82] text-[14px] leading-[24px]">
                                    მხარდამჭერები
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg>
                                    </div>
                                </th>
                                <th className="py-3 px-6">
                                    <div className="flex justify-end items-center font-medium text-[#727A82] text-[14px] leading-[24px]">
                                    დაფინანსება
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th  className="flex justify-start py-4 px-6 font-medium text-gray-900">
                                    1
                                </th>
                                <td className="py-4 text-left">
                                  <div class="flex items-center">
                                        <div class="mr-2">
                                            <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                        </div>
                                        <span className='text-lightBlack font-medium text-[14px] leading-[24px]'>გოგა თურაშაული</span>
                                    </div>
                                </td>
                                <td className="py-4 text-center">
                                    <div onClick={() => setShowModal(true)} class="group cursor-pointer flex justify-start items-center">
                                        <span className='text-lightBlack font-medium text-[14px] leading-[24px] mr-[25px]'>1 232 ადამიანი</span>
                                        <div class="flex items-center justify-center">

                                            <span class="invisible group-hover:visible  absolute text-white  rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-2.5 -translate-y-9">
                                                <p  class="font-medium text-xs leading-5 text-whitebg-white ">სრული სიის ნახვა</p>
                                                <span class="absolute  w-[8px] h-[8px] rotate-45 ml-[50%]  translate-x-[-65px] bg-[#292d33e6]"></span>
                                            </span>

                                            <img class="w-6 h-6 rounded-full border-white border-[1.5px] -m-1 z-[5]" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                            <img class="w-6 h-6 rounded-full border-white border-[1.5px] -m-1 z-[4]" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                            <img class="w-6 h-6 rounded-full border-white border-[1.5px] -m-1 z-[3]" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            <img class="w-6 h-6 rounded-full border-white border-[1.5px] -m-1 z-[2]" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                            <img class="w-6 h-6 rounded-full border-white border-[1.5px] -m-1 z-[1]" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            
                                         </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-greenButton font-medium text-[14px] leading-[16px]">
                                    10 000 000 GeD
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Rating;