import { FaSearch } from "react-icons/fa";
import Input from "../form/Input.jsx";

export default function SearchBar() {
  return (
    <div className={'flex-1'}>
        <label className="input w-full outline-offset-1  ">
            <FaSearch className="size-4"/>
            <Input type={"search"} className={"grow"} placeHolder={"Book , Author or Category"} required={false}  />
            <datalist>
                <option>Hello World</option>
            </datalist>
        </label>
    </div>
  );
}
