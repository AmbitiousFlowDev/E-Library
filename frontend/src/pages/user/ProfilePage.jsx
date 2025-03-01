import {FaArrowRight} from "react-icons/fa";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Avatar from "../../components/navbar/Avatar.jsx";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";

export default function ProfilePage() {
    const {user} = useContext(AuthContext);
    return <section className={'container flex flex-col px-12 mt-12'}>
        <PageNavigator title={'Profile'} path={-1} />
        <div className="tabs tabs-border font-[poppins]">
            <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Info" defaultChecked />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <p>
                    <span>USERNAME:&nbsp; </span>
                    <span>{user.sub}</span>
                </p>
                <p>
                    <span>USERNAME:&nbsp; </span>
                    <span>{user.sub}</span>
                </p>
                <p>
                    <span>USERNAME:&nbsp; </span>
                    <span>{user.sub}</span>
                </p>
            </div>

            <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Borrowed Books"  />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                Tab content 2
            </div>
        </div>
    </section>
}