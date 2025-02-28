import {CiUser} from "react-icons/ci";
import {MdEmail} from "react-icons/md";
import Input from "../Input.jsx";
import TextArea from "../TextArea.jsx";


export default function ContactForm() {
  return (
      <form className="card bg-base-100 w-[38rem] h-[26rem] shadow-lg font-[poppins]">
        <div className="card-body flex flex-col justify-center">
          <h2 className="card-title text-4xl flex justify-center text-center mb-4">Contact</h2>
          <label className="input input-lg w-full">
            <CiUser />
            <Input type={"text"} name={"fullName"} className={"grow w-full"} placeHolder={"Full Name"}/>
          </label>
          <label className="input  input-lg w-full">
            <MdEmail />
            <Input type={"email"} name={"password"} className={"grow"} placeHolder={"Your Personal Email"}/>
          </label>
          <TextArea placeHolder={"Message"} className={"textarea textarea-bordered textarea-lg w-full resize-none"}>
            ...
          </TextArea>
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
