const Navbar = () => {
    return (  
        <nav className="w-full p-5 bg-nav drop-shadow-xl">
            <div className="flex flex-row justify-between items-start px-6 py-2 box-border rounded-xl space-x-3">
                <img className=" box-border mx-11 my-2 h-10" src="/logo.png"></img>
                
                <div className="flex justify-end mr-5">
                    <a href="s" target="_blank">
                        <div className="flex justify-end items-center px-6 py-3 mr-10 mt-2 rounded-xl box-border bg-button gap-1">
                            
                            <div className=" font-bold text-xl text-white">Register{"  "}</div>
                            <img src="/arrow.png" className=" box-border my-1 px-1 w-7"/>
                            
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;