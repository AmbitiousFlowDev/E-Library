import {CiUser} from "react-icons/ci";
import {MdEmail} from "react-icons/md";


export default function ContactForm() {
  return (
      <form className="card bg-base-100 w-[38rem] h-[26rem] shadow-lg font-[poppins]">
        <div className="card-body flex flex-col justify-center">
          <h2 className="card-title text-4xl flex justify-center text-center mb-4">Contact</h2>
          <label className="input input-lg w-full">
            <CiUser />
            <input type="text" name="username" className="grow w-full" placeholder="Full Name"/>
          </label>
          <label className="input  input-lg w-full">
            <MdEmail />
            <input type="email" name="password" className="grow" placeholder="Your Personal Email"/>
          </label>
          <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full resize-none"></textarea>
          <div className="card-actions flex mt-4 justify-center">
            <a className="btn btn-primary w-full" href={"mailto:random@gmail.com"}>
              Send
            </a>
            <span>
          </span>
          </div>
        </div>
      </form>
  );
}
