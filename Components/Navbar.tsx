import Quotes from "../Icons/quotesIcon";
import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";
import ChevronDown from "../Icons/chevronDown";
import RequestQuote from "./requestQuote";
import WizIcon from "../Icons/wizIcon";

import Button from "./button";
import ShipIcon from "../Icons/shipIcon";
import UserIcon from "../Icons/userIcon";

const Navbar=()=>{
    //5C20CF
    return (
        
            <nav className="  items-center bg-[#5C20CF] flex flex-row">
                <div className=" flex h-full m-0"  > 
                    <div className="pl-10 pr-20 flex items-center">
                       <WizIcon/>
                    </div> 

                    <Button name="WorkSpace" iconRight={<ChevronDown/>} />
                    <Button name="Quotes" iconLeft={<Quotes/>} />
                    <Button name="Bookings" iconLeft={<BookingsIcon/>} />
                    <Button name="Manage" iconLeft={<SettingsIcon/>} iconRight={<ChevronDown/>} />
                </div>
                <div className="flex ml-80 m-0 h-full ">
                    <RequestQuote />
                    <Button name="Wiz Voyage" iconLeft={<ShipIcon />} />
                    <Button name="Admin" iconLeft={<UserIcon />} iconRight={<ChevronDown/>} />
                    </div>
                    {
      }
            </nav>
        
    )
}
export default Navbar;

