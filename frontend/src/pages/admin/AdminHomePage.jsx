import StatsCard from "../../components/admin/card/StatsCard";
import PageNavigator from "../../components/navigation/PageNavigator";

import { FaUser, FaBook, FaRecordVinyl } from "react-icons/fa";

export default function AdminHomePage() {
  return (
    <section className="container flex flex-col px-12 mt-12">
      <PageNavigator title={"Admin"} path={-1} />
      <section className="grid grid-cols-3 gap-4 font-[poppins] mt-4">
        <StatsCard
          icon={<FaUser className="size-6" />}
          count={0}
          title={"Users"}
        />
        <StatsCard
          icon={<FaBook className="size-6" />}
          count={0}
          title={"Books"}
        />
        <StatsCard
          icon={<FaRecordVinyl className="size-6" />}
          count={0}
          title={"Borrow Records"}
        />
      </section>
    </section>
  );
}
