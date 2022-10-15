/* eslint-disable jsx-a11y/alt-text */
import xmark from '../../assets/images/xmark.svg';
import search from '../../assets/images/search.svg';
const SupporterModal = ({setShowModal}) => {
    return (    
        <div className='fixed top-0 left-0 w-full h-full  bg-[#1b2127]/[.05] z-[500]'>        
            <div className='w-[660px] max-h-[924px] overflow-y-scroll  mt-[8%] mx-auto bg-white rounded-lg'>
                <div className="flex justify-between justify-items-center py-[20px] w-full h-fit px-6 border-solid border-b-[1px] border-[#EAEAEB] ">
                    <p className=' text-lightGray font-medium text-[14px] leading-[24px]'>აქტიური მხარდამჭერები</p>
                    <p className='mr-[140px] text-lightGray font-medium text-[14px] leading-[24px]'>ყოფილი მხარდამჭერები</p>
                    <button onClick={() => setShowModal(false)}>
                         <img className='w-5 h-5' src={xmark} alt="xmark"/>
                    </button>
                </div>
                
                <div className='flex justify-between items-center mt-6 mx-6'>
                    <p className=' text-lightGray font-medium text-[14px] leading-[24px]'>12 რეზულტარი</p>
                    <div className='flex w-[294px] border-[1px] border-[#E0E2E7] rounded-md pt-3 pr-2.5 pb-3 pl-3'>
                            <img className='w-5 h-5 mr-2' src={search} alt="search"/>
                            <input className='outline-none text-sm' type="text" name="search" placeholder='პოლიტიკოსის ძიება'/>
                    </div>
                </div>

                <div className="mt-6  mx-6 mb-10 ">
                        <table className="w-full text-right text-sm   text-gray-500">
                            <thead className="text-xs  text-gray-700 uppercase bg-gray-50">
                                <tr >
                                    <th className=" text-[#727A82] w-2 text-left py-3 pl-6 "> 
                                        #
                                    </th>
                                    <th  className="py-3">
                                        <div className="flex justify-start font-medium text-[#727A82] text-[14px] leading-[24px]">
                                        მხარდამჭერები
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
                                    <td className="py-4 px-6 text-greenButton font-medium text-[14px] leading-[16px]">
                                        10 000 000 GeD
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th  className="flex justify-start py-4 px-6 font-medium text-gray-900">
                                        2
                                    </th>
                                    <td className="py-4 text-left">
                                    <div class="flex items-center">
                                            <div class="mr-2">
                                                <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                            <span className='text-lightBlack font-medium text-[14px] leading-[24px]'>გოგა თურაშაული</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-greenButton font-medium text-[14px] leading-[16px]">
                                        10 000 000 GeD
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th  className="flex justify-start py-4 px-6 font-medium text-gray-900">
                                        3
                                    </th>
                                    <td className="py-4 text-left">
                                    <div class="flex items-center">
                                            <div class="mr-2">
                                                <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                            <span className='text-lightBlack font-medium text-[14px] leading-[24px]'>გოგა თურაშაული</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-greenButton font-medium text-[14px] leading-[16px]">
                                        10 000 000 GeD
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th  className="flex justify-start py-4 px-6 font-medium text-gray-900">
                                        4
                                    </th>
                                    <td className="py-4 text-left">
                                    <div class="flex items-center">
                                            <div class="mr-2">
                                                <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                            <span className='text-lightBlack font-medium text-[14px] leading-[24px]'>გოგა თურაშაული</span>
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
        </div>
     );
}
 
export default SupporterModal;