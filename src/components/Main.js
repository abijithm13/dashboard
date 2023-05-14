import React from 'react';
import { FaRegCalendarMinus } from 'react-icons/fa';
import Charts from "./Charts";






const Main = () => {
    return(
<div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
 <div className='flex items-center justify-between'>
    <h1 className='text-[#5a5c69] text-[28px]  leading-[34px] font-normal cursor-pointer'>DASHBOARD</h1>
    <button className='bg-[#17A673] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
 </div>
 <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
<div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out'>
    <div>
        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>WORK TIME</h2>
        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>9 HRS</h1>
    </div>
    <FaRegCalendarMinus fontSize={28} color=""/>
</div>

<div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out'>
    <div>
        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>STUDY TIME</h2>
        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>2 HRS</h1>
    </div>
    <FaRegCalendarMinus fontSize={28} color=""/>
</div>


<div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out'>
    <div>
        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>PLAY TIME</h2>
        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>2 HRS</h1>
    </div>
    <FaRegCalendarMinus fontSize={28} color=""/>
</div>


<div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out'>
    <div>
        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>TASK </h2>
        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>3 HRS</h1>
    </div>
    <FaRegCalendarMinus fontSize={28} color=""/>
</div>

<div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
    <div  >
    <Charts/>
    </div>
</div>



 </div>
</div>
    )
}

export default Main;