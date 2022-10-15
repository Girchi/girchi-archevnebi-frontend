import registration from '../../assets/images/registration.jpg';

const AutorizationSideBar = () => {
    return ( 
        <div className='flex flex-col items-start max-w-[318px] h-[332px] p-4 gap-4 bg-white rounded-lg'>
            <div className='max-w-[286px] rounded'>
                <img  src={registration} alt="registration"/>
            </div>
            <p className='text-sm font-medium text-lightGray'>გაიარე ავტორიზაცია რათა შექმნა შენი პირადი პარტიული სია</p>
        <button className='bg-greenButton w-[286px] h-[48px] text-white text-center rounded-full text-[14px] leading-[24px]'>ავტორიზაცია</button>
    </div>
     );
}
 
export default AutorizationSideBar;