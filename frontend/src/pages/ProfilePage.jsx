import {FaArrowRight} from "react-icons/fa";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

export default function ProfilePage() {
    const {user} = useContext(AuthContext);
    return <section className={'container flex flex-col px-12 mt-12'}>
        <section className={'font-[poppins] mb-12 flex flex-row justify-between'}>
            <h1 className={'text-5xl font-bold'}>Profile</h1>
            <button className={'btn btn-ghost'} onClick={() => {navigate(-1)}}>
                <FaArrowRight className={'size-8'} />
            </button>
        </section>
        <div className="tabs tabs-border font-[poppins]">
            <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Info" />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <p>USERNAME : {user.sub}</p>
                <p>ROLE : {user.role}</p>
                <p>ID : {user.id}</p>
            </div>

            <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Borrowed Books" defaultChecked />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                Tab content 2
            </div>

        </div>
    </section>
}