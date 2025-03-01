import Card from "../../components/dashboard/card/Card";
import PageNavigator from "../../components/navigation/PageNavigator";

export default function AdminDashBoardPage() {
  return (
    <section className="w-full mt-12">
      <PageNavigator title={"Dashboard"} path={-1} />
      <section className="grid grid-cols-3 gap-4">
        <Card count={0} title={'Users'} />
      </section>
    </section>
  );
}
