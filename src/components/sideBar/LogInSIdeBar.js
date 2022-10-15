
import { useState } from 'react';


const LogInSIdeBar= () => {

    const [sideBarNavigation, setSideBarNavigation] = useState(false);

    const buttonList = `flex items-center w-full p-[15px] rounded-md ${sideBarNavigation ? 'bg-white': 'bg-lightGreen'}`;
    const buttonRate = `flex items-center w-full p-[15px] rounded-md ${sideBarNavigation ? 'bg-lightGreen' : 'bg-white'}`;
    
    const textList = `font-medium text-[14px] leading-[24px] ${sideBarNavigation ? 'text-[#727A82]' : 'text-white'}`;
    const textRate= `font-medium text-[14px] leading-[24px] ${sideBarNavigation ? 'text-white' : 'text-[#727A82]'}`;

    const imgList =  `w-6 h-3 mr-3 ${sideBarNavigation ? 'fill-[#727A82]' : 'fill-white'}`
    const imgRate = `w-[18px] h-[18px] mr-[15px] ${sideBarNavigation ?  'fill-white': 'fill-[#727A82]'}`

    return ( 
        <div className='bg-white w-[318px] h-[136px] rounded-md p-4'>
            <button className={buttonList} onClick={() => setSideBarNavigation(false)} >
                <svg className={imgList} width="24" height="12" viewBox="0 0 24 12"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.75C13.63 6.75 15.07 7.14 16.24 7.65C17.32 8.13 18 9.21 18 10.38V12H6V10.39C6 9.21 6.68 8.13 7.76 7.66C8.93 7.14 10.37 6.75 12 6.75ZM4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1ZM20 7C21.1 7 22 6.1 22 5C22 3.9 21.1 3 20 3C18.9 3 18 3.9 18 5C18 6.1 18.9 7 20 7ZM24 10.43C24 9.62 23.52 8.9 22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43ZM12 0C13.66 0 15 1.34 15 3C15 4.66 13.66 6 12 6C10.34 6 9 4.66 9 3C9 1.34 10.34 0 12 0Z" />
                </svg>
                <p className={textList}>ჩემი პარტიული სია</p>
            </button>      
            
            <button  className={buttonRate} onClick={() => setSideBarNavigation(true)} >
                <svg className={imgRate} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM2 2V16H16V2H2ZM14 14H12V7H14V14ZM10 14H8V4H10V14ZM6 14H4V9H6V14Z" />
                </svg>
                <p className={textRate}>რეიტინგი</p>
            </button>
        </div>
     );
}
 
export default LogInSIdeBar;