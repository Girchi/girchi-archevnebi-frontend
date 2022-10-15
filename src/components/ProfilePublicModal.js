import xmark from '../assets/images/xmark.svg'
import StatusIcon from '../assets/images/StatusIcon.svg'

const ProfilePublicModal = () => {
    return ( 
        <div className='fixed top-0 left-0 w-screen h-screen z-500 bg-[#1b2127]/[.05]'>
             <div className='flex flex-col items-center mx-auto mt-[12%] gap-6 isolate w-[432px] h-[324px] rounded-lg bg-white'>
                <div className='flex justify-between w-full px-6 py-[18px] border-b-[1px] border-[#F5F5F5]'>
                    <h3 className='text-base font-medium text-[#1B2127]'>გაასაჯაროვე პროფილი</h3>
                    <img className='w-5 h-5 mr-2' src={xmark} alt="xmark"/>
                </div>
                <img src ={StatusIcon} alt='StatusIcon' />
                <p className='text-sm font-medium text-[#6F7680] px-6'>პარტიული სიის გამოსაქვეყნებლად საჭიროა პროფილის გასაჯაროება</p> 
                <div className='flex justify-end items-center w-full px-6 py-5 border-t-[1px] border-[#F5F5F5] '>
                    <button className=' text-[14px] leading-[24px] font-medium text-[#1B2127] mr-8 '>გასაგებია</button>
                    <button className='px-6 py-2 rounded-[32px] font-medium bg-[#1A8917] text-white text-[14px] leading-[24px]'>გასაჯაროვება</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProfilePublicModal;