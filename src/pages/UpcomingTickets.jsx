import Navbar from "../components/Navbar";
import Qrcode from "../assets/qrcode.svg";
import RT from "../assets/RT.svg";

const UpcomingTickets = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-white relative">
      <div className="flex-grow">
        <div className="h-[38px] absolute top-[28px] lef-[16px] text-4x2">
        <h1 className="font-roboto font-black leading-[37.5px] text-left ml-[14px]" id="titulo">Upcoming Tickets</h1>
        </div>
        <div className="w-[347px] h-[315px] absolute top-[97px] left-[16px] gap=[40px]">
          <h1 className="font-roboto text-base font-bold leading-[18.75px] text-left w-[60px] h-[19px] text-white">Parasite</h1>
          <div className="flex flex-row  justify-between">
            <div className="text-base font-medium leading-[18.75px] text-left text-[#cccccc]">
              2h 12min R
            </div>
            <div className="flex flex-row justify-between">
              <img src={RT}/>
              <p className="text-base font-medium leading-[18.75px] text-right text-[#cccccc]">99%</p>
            </div>
          </div>
          <div className="mt-[40px]">
            <h1 className="text-base font-bold leading-[18.75px] text-left w-[137px] h-[19px] text-[rgba(255,255,255,1)]">Order confirmation</h1>
          </div>
          <div className="w-[343px] h-[162px] mt-[60px]">
            <h1 className="">Orde Details</h1>
            <div className="flex flex-row  justify-between text-[#cccccc] mt-[5px]">
              <p>Adult Ticket (Seat D14)</p>
              <p>$16.49</p>
            </div>
            <div className="flex flex-row  justify-between text-[#cccccc] text-base leading-[18.75px] mt-[5px]">
              <p>Adult Ticket (Seat D15)</p>
              <p>$16.49</p>
            </div>
            <div className="flex flex-row  justify-between text-[#cccccc] text-base leading-[18.75px] mt-[5px]">
              <p>Subtotal</p>
              <p>$32.98</p>
            </div>
            <div className="flex flex-row  justify-between text-[#cccccc] text-base leading-[18.75px] mt-[5px]">
              <p>Tax</p>
              <p>$2.47</p>
            </div>
            <div className="flex flex-row  justify-between text-base font-bold leading-[18.75px] mt-[10px]">
              <p>Total</p>
              <p>$35.45</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="https://s3-alpha-sig.figma.com/img/e96d/9af5/bf20bc88be5675e43fdee960fddd14be?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMu7rlkEAZ6iczQHka~ElrEXvRKfOucuv720IZ1E8UeiF5cw758qNIyIwS2xCem-F8~n-ptgMPtpLKjGAFRLs1c8r~akDi9wpX8-64fSVYpAah-BwRm5GpT2n3pan89tF9LHfRd~kFOJEiAZ-ldNQPkA18U7ComCCHkBsKo-WPgDF8DJOlBwZozttsYYPq1MzSWXiwV781fV2o4641RunP426UP5EQhZzkgmRW24vHxWavotB6ibJSBBde40B8vRABkpGyfM2GpiPNoOZMd0hDLrqilg~n-VLTmIJx8Hsw6~67I-EuS~ZUwVzdhRqj~qz0amzJ2iauwvpsrNJ7WjEQ__"
         alt="Bttom Image" className="w-full h-auto"/>
         <img src={Qrcode} className="absolute bottom-[50%] left-[25%] z-10"/>
         <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-transparent "></div> 
      </div>
      <Navbar/>
    </div>
    
  )
};

export default UpcomingTickets;
