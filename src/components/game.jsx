import React from "react";

export const Frame = () => {
  return (
    <div className="bg-[#66b2b2] flex flex-row justify-center w-full">
      <div className="bg-[#66b2b2] rounded-[20px] overflow-x-hidden w-[720px] h-[360px] relative">
        <img className="left-[540px] absolute w-px h-[360px] top-0 object-cover" alt="Line" src="line-2.svg" />
        <img className="left-[180px] absolute w-px h-[360px] top-0 object-cover" alt="Line" src="line-1.svg" />
        <div className="absolute w-[142px] h-[45px] top-[38px] left-[18px] bg-black rounded-[15px]">
          <div className="absolute w-[142px] h-[45px] -top-px left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-white text-[23px] text-center tracking-[0] leading-[normal]">
            Player 1
          </div>
        </div>
        <div className="absolute w-[142px] h-[45px] top-[38px] left-[560px] bg-black rounded-[15px]">
          <div className="absolute w-[142px] h-[45px] -top-px left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-white text-[23px] text-center tracking-[0] leading-[normal]">
            Player 2
          </div>
        </div>
        <div className="left-[44px] absolute w-[90px] h-[174px] top-[130px]">
          <div className="absolute w-[90px] h-[45px] top-0 left-0 bg-[#0000ff] rounded-[10px]">
            <div className="absolute w-[142px] h-[45px] -top-px left-[-26px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              ADD
            </div>
          </div>
          <div className="absolute w-[90px] h-[45px] top-[129px] left-0 bg-[#ff0000] rounded-[10px]">
            <div className="absolute w-[142px] h-[45px] -top-px left-[-26px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              PASS
            </div>
          </div>
          <div className="absolute w-[60px] h-[60px] top-[57px] left-[15px] bg-white rounded-[10px]">
            <div className="absolute w-[60px] h-[60px] -top-px left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              A
            </div>
          </div>
        </div>
        <div className="left-[586px] absolute w-[90px] h-[174px] top-[130px]">
          <div className="absolute w-[90px] h-[45px] top-0 left-0 bg-[#0000ff] rounded-[10px]">
            <div className="absolute w-[142px] h-[45px] -top-px left-[-26px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              ADD
            </div>
          </div>
          <div className="absolute w-[90px] h-[45px] top-[129px] left-0 bg-[#ff0000] rounded-[10px]">
            <div className="absolute w-[142px] h-[45px] -top-px left-[-26px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              PASS
            </div>
          </div>
          <div className="absolute w-[60px] h-[60px] top-[57px] left-[15px] bg-white rounded-[10px]">
            <div className="absolute w-[60px] h-[60px] -top-px left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
              A
            </div>
          </div>
        </div>
        <div className="absolute w-[260px] h-[44px] top-[124px] left-[230px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-white text-[23px] text-center tracking-[0] leading-[normal]">
          Word1
        </div>
        <div className="absolute w-[260px] h-[44px] top-[208px] left-[230px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-white text-[23px] text-center tracking-[0] leading-[normal]">
          Word2
        </div>
      </div>
    </div>
  );
};

