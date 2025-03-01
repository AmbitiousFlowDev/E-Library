import PageNavigator from "../../components/navigation/PageNavigator";
import Table from "../../components/table/Table";
import headers from "../../constants/headers.json";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchUsers from "../../features/user/actions/fetchUsers";


export default function AdminUserPage() {
  const dispatch = useDispatch();
  const {users , loading , error} = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <section className="w-full mt-12">
      <PageNavigator title={"Users"} path={-1} />
      <section className="mt-12">
        {loading ? <p>Loading</p> : <Table headers={headers.user.header} data={users?.content} columns={headers.user.keys}  />}
      </section>
    </section>
  );
}
