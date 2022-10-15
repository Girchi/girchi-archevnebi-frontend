import xmark from '../../assets/images/xmark.svg'

const SeparateJediModal = ({setShowModal}) => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen z-500 bg-[#1b2025]/50'>
            <div className='flex flex-col items-center mx-auto mt-[5%] lg:mt-[8%] xl:mt-[14%] isolate w-[432px] rounded-lg bg-white'>

                <div className="flex justify-between items-center w-full px-6 py-[18px] border-b-[1px] border-[#F5F5F5]">
                    <h3 className='text-base font-medium text-[#121212]'>შეიყვანე თანხა</h3>
                    <img onClick={() => setShowModal(false)}  className='w-5 h-5 cursor-pointer ' src={xmark} alt="xmark"/>
                </div>

                <div className='flex flex-col start p-6 gap-6'>

                    <div className='flex flex-col items-center w-[384px] p-4 gap-4 rounded-md bg-[#292D33]/[.04]'>
                        <div className='flex justify-between items-center w-full'>
                            <span className='font-medium text-[14px] leading-[24px] text-[#727A82]'>პირადი ბალანსი</span>
                            <span className='font-medium text-[14px] leading-[16px] text-[#292D33]'>10 000 000 GeD</span>
                        </div>

                        <div className='flex justify-between items-center w-full border-b-[1px] border-[#E0E2E7] pb-4 '>
                            <span className='font-medium text-[14px] leading-[24px] text-[#727A82]'>ფსონი</span>
                            <span className='font-medium text-[14px] leading-[16px] text-[#E34338]'>-20 000 GeD</span>
                        </div>

                        <div className='flex justify-between items-center w-full'>
                            <span className='font-medium text-[14px] leading-[24px] text-[#727A82]'>ნაშთი</span>
                            <span className='font-medium text-[14px] leading-[16px] text-[#292D33]'>9 980 000 GeD</span>
                        </div>
                    </div>


                    <p className='font-medium text-[14px] leading-[24px] text-[#727A82]'>შეიყვანე შენი პარტიის მხარდასაჭერი რაოდენობა შენი ბალანსიდან</p>


                    <div>
                        <p className='text-xs text-[#292D33] font-medium mb-1.5'>მხარდასაჭერი თანხა</p> 
                         <div className='flex justify-between items-center w-full border-[1px] border-[#E0E2E7] pr-[12px]  py-[10px] pl-3  rounded-md'>
                            <input className='appearance-none outline-none text-sm w-44' type="number" name="ged" min="1" placeholder='0'/>
                            <div class="flex justify-between items-center">
                            <label  for="small-toggle" class="cursor-pointer text-xs mr-[10px] text-[#727A82]">მთელი ბალანსი</label>
                                <label for="small-toggle" class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="small-toggle" class="sr-only peer" />
                                    <div class="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1A8917]"></div>
                                </label>
                                <svg className='ml-[17px]' width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3135 10.177H8.4735L8.9035 12.528H11.2275V15.651C10.4955 15.987 9.6785 16.121 8.8175 16.121C6.3235 16.121 5.1185 14.879 5.1185 11.218C5.1185 7.759 6.9685 6.315 9.4635 6.315C10.9265 6.315 11.8725 6.651 13.1195 7.39L15.2705 5.644C14.1955 4.905 12.9045 4.334 11.2705 4.065V0.875H9.5485V3.898H9.3335C8.6455 3.898 7.9565 3.965 7.3115 4.065V0.875H5.5915V4.502C2.6235 5.509 0.6875 7.793 0.6875 11.218C0.6875 14.878 2.3225 17.23 5.5055 18.136V21.126H7.2255V18.472C7.7415 18.539 8.3015 18.572 8.8605 18.572C9.0755 18.572 9.2475 18.572 9.4625 18.539V21.125H11.1825V18.371C12.6455 18.136 14.0655 17.7 15.3125 17.095V10.177H15.3135Z" fill="#1A8917"/>
                                </svg>
                            </div>
                         </div> 
                    </div>
                </div>

                <div className='flex justify-end items-center w-full px-6 py-5 border-t-[1px] border-[#F5F5F5] '>
                    <button onClick={() => setShowModal(false)} className=' text-[14px] leading-[24px] font-medium text-[#1B2127] mr-8 '>უკან</button>
                    <button onClick={() => setShowModal(false)} className='px-6 py-2 rounded-[32px] font-medium bg-[#1A8917] text-white text-[14px] leading-[24px]'>დადასტურება</button>
                </div>

            </div>
        </div>
      );
}
 
export default SeparateJediModal;