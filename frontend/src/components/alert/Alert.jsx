import {FaInfoCircle} from "react-icons/fa";

export default function Alert({title , text , color}) {
    return <div role="alert" className={`alert alert-${color} w-full rounded-none text-center flex justify-center`}>
        <FaInfoCircle className={'size-6'}/>
        <span className={'font-bold'}>{title}</span>
        <span>{text}</span>
    </div>
}