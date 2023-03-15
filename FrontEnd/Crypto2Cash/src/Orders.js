import Entry from "./Entry";
import Navbar from "./Navbar";
import NavbarLog from "./NavbarLog";
const Orders = () => {
    return (
        <div className="orders">
            <NavbarLog/>
            <div className="px-10 flex flex-row justify-start self-end box-border">
                <div className=" flex flex-row justify-start self-start mt-11 mb-11 box-border">
                    <div className=" gap-1 flex flex-col justify-start self-start mb-[42px] box-border">
                        <div className="gap-1 flex flex-row justify-end self-end box-border text-right">
                            <image className="w-10 h-10" src="/dashboard.png"></image>
                            <div className=" text-nearBlack text-lg font-bold"> Dashboard</div>
                        </div>
                        <div className="gap-1 flex flex-row justify-end self-end box-border text-right">
                            <image className=" w-10 h-10" src="/orders.png"></image>
                            <div className=" text-nearBlack text-lg font-bold"> Orders</div>
                        </div>
                        <div className="gap-1 flex flex-row justify-end self-end box-border text-right">
                            <image className=" w-10 h-10" src="/orders.png"></image>
                            <div className=" text-nearBlack text-lg font-bold"> Product Management</div>
                        </div>
                        <div className="gap-1 flex flex-row justify-end self-end box-border text-right">
                            <image className=" w-10 h-10" src="/orders.png"></image>
                            <div className=" text-nearBlack text-lg font-bold"> Settings</div>
                        </div>
                    </div>
                    <div className="w-full pl-10 gap-1 flex flex-row justify-start self-start mb-[42px] box-border">
                    <div className=" w-full flex flex-row flex-grow">
                    <Entry/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Orders;