import {FaInfoCircle} from "react-icons/fa";

export default function Alert() {
    return <div role="alert" className="alert alert-success w-full rounded-none text-center flex justify-center">
        <FaInfoCircle className={'size-6'}/>
        <span className={'font-bold'}>Attention Book Lovers ! </span>
        <span>Discover the latest bestsellers, thrilling mysteries, and heartwarming stories. Don't miss out—explore now ✨</span>
    </div>
}