import TableRow    from "./TableRow";
import TableColumn from "./TableColumn";
import TableHeader from "./TableHeader";
import TableBody   from "./TableBody";
import Loader      from "../loader/Loader";

export default function Table({ headers, data , renderRow, loading }) {
  return (
    <table className={`table w-full  font-[poppins]`}>
      <TableHeader>
        <TableRow className={'text-center'}>
          {headers.map((header, index) => (
            <TableColumn key={index}>{header}</TableColumn>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{loading ? <Loader /> : data?.map(renderRow)}</TableBody>
    </table>
  );
}
