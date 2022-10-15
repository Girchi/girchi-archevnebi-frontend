import { useState } from "react";
import SeparateJediModal from "./SeparateJediModal";

const MyPoliticalListHeader = () => {

    const [showModal, setShowModal] = useState(false)


    return ( 
        <>
            {showModal && <SeparateJediModal setShowModal={setShowModal} /> }
            <div className="flex items-center justify-between w-full">
                <div>
                    <h2 className="uppercase font-bold text-[20px] leading-[24px] text-[#292D33] pb-1" >შექმენი შენი პარტიული სია</h2>
                    <p className="font-medium text-[14px] leading-[24px] text-[#727A82]">გამოყავი თანხა, აირჩიე პოლიტიკოსები, დააფინანსე და შექმენი სია</p>
                </div>

                {/* <button onClick={() => setShowModal(true)}  className="flex items-center justify justify-between py-3 pr-[17px] pl-5 bg-[#F2F6EC] rounded-[56px]">
                    <span className="text-[#1A8917] font-medium text-base mr-[11px] ">გამოყავი თანხა</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#1A8917"/>
                    </svg>
                </button> */}

                <div className="flex  items-center justify-between max-w-[320px] w-full">
                    <div>
                        <div className="flex items-center">
                            <span className="mr-[11px] font-bold text-[20px] leading-[24px] text-[#292D33]">10 010 000</span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6843 16.1495C1.45054 16.1491 1.22769 16.0506 1.07014 15.8779C0.909676 15.7066 0.829941 15.475 0.850971 15.2412L1.05514 12.9962L10.4868 3.56787L13.4343 6.51454L4.00514 15.942L1.76014 16.1462C1.7343 16.1487 1.70847 16.1495 1.6843 16.1495ZM14.0226 5.92537L11.076 2.9787L12.8435 1.2112C12.9998 1.05472 13.2119 0.966797 13.4331 0.966797C13.6542 0.966797 13.8663 1.05472 14.0226 1.2112L15.7901 2.9787C15.9466 3.13501 16.0345 3.34711 16.0345 3.56829C16.0345 3.78946 15.9466 4.00156 15.7901 4.15787L14.0235 5.92454L14.0226 5.92537Z" fill="#959BA1"/>
                            </svg>
                        </div>
                        <p className="font-medium text-[14px] leading-[24px] text-[#727A82]">გამოყოფილი საპარტიო თანხა</p>
                    </div>

                    <div className="px-4 py-3 bg-[#F2F6EC] rounded-md ">
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3135 10.177H8.4735L8.9035 12.528H11.2275V15.651C10.4955 15.987 9.6785 16.121 8.8175 16.121C6.3235 16.121 5.1185 14.879 5.1185 11.218C5.1185 7.759 6.9685 6.315 9.4635 6.315C10.9265 6.315 11.8725 6.651 13.1195 7.39L15.2705 5.644C14.1955 4.905 12.9045 4.334 11.2705 4.065V0.875H9.5485V3.898H9.3335C8.6455 3.898 7.9565 3.965 7.3115 4.065V0.875H5.5915V4.502C2.6235 5.509 0.6875 7.793 0.6875 11.218C0.6875 14.878 2.3225 17.23 5.5055 18.136V21.126H7.2255V18.472C7.7415 18.539 8.3015 18.572 8.8605 18.572C9.0755 18.572 9.2475 18.572 9.4625 18.539V21.125H11.1825V18.371C12.6455 18.136 14.0655 17.7 15.3125 17.095V10.177H15.3135Z" fill="#1A8917"/>
                        </svg>
                    </div>
                </div>
            </div>  
        </>          
     );
}
 
export default MyPoliticalListHeader;