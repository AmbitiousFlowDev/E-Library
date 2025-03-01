import PageNavigator from "../../components/navigation/PageNavigator";

export default function AdminUserPage() {
  return (
    <section className="w-full mt-12">
      <PageNavigator title={"Users"} path={-1} />
      <section className="grid grid-cols-3 gap-4"></section>
    </section>
  );
}
