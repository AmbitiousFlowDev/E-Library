import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

export default function TableHeader({ headers }) {
  return (
    <thead>
      <TableRow>
        {headers.map((header, index) => (
          <TableColumn key={index}>{header}</TableColumn>
        ))}
      </TableRow>
    </thead>
  );
}
