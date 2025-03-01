import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

export default function TableBody({ data, columns }) {
  return (
    <tbody>
      {
        data.map((item , index) => {
          return <TableRow>
           {
            columns.map((columns , index) => {
              return <TableColumn>{item[columns]}</TableColumn>
            })
           }
          </TableRow>
        })
      }
    </tbody>
  );
}