import { TableCell, TableRow } from "@mui/material";

interface RowItemProps {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export const RowItem = (props: RowItemProps) => {
  return (
    <div>
      <TableRow
        key={props.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
        <TableCell align="right">{props.calories}</TableCell>
        <TableCell align="right">{props.fat}</TableCell>
        <TableCell align="right">{props.carbs}</TableCell>
        <TableCell align="right">{props.protein}</TableCell>
      </TableRow>
    </div>
  );
};
