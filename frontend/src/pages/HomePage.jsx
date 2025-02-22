import LatestBooksList from "../components/book/LatestBooksList.jsx";
import EventList       from "../components/event/EventList.jsx";
import Hero            from "../components/hero/Hero.jsx";
import {FaInfoCircle} from "react-icons/fa";
import Alert from "../components/alert/Alert.jsx";

export default function HomePage() {
    return <section className="flex flex-col items-center justify-center ">
        <Alert/>
        <Hero/>
        <LatestBooksList/>
        <EventList/>
    </section>
}