import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ size, headers, data , columns }) {

  return (
    <table className={`table w-full ${size} font-[poppins]`}>
      <TableHeader headers={headers} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}
