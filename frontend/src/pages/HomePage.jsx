import LatestBooksList from "../components/book/LatestBooksList.jsx";
import EventList       from "../components/event/EventList.jsx";
import Hero            from "../components/hero/Hero.jsx";
import Alert           from "../components/alert/Alert.jsx";
import alert           from "../constants/alert.json"

export default function HomePage() {
    return <section className="flex flex-col items-center justify-center">
        <Alert color={"success"} title={alert.title} text={alert.text} />
        <Hero/>
        <LatestBooksList/>
        <EventList/>
    </section>
}