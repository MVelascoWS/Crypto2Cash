import Home from "./Home";
import Navbar from "./Navbar";

const Form = () => {
    return (
        <div className="form">
            <Navbar/>
           <div className="mt-10 text-2xl font-bold text-head text-center box-border">Start to receive crypto<br/>in your business</div>
            <div className="w-2/3 align-middle items-center left-11">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-labelText" >
                        First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Username"/>
                </div>
                </form>
            </div>
        </div>
      );
}
 
export default Form;