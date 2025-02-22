import Hero from "../components/Hero";
import TopBooksList from "../components/TopBooksList.jsx";
import LatestBooksList from "../components/LatestBooksList.jsx";
import EventList from "../components/EventList.jsx";

export default function HomePage() {
    return <section className="flex flex-col items-center justify-center">
        <Hero/>
        <LatestBooksList/>
        <EventList/>
    </section>
}