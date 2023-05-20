import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export type Row = {
  name: string;
  amount: string;
  usd: number;
  jpy: number;
};

type TokenTableProps = {
  rows: Row[];
};

const TokenTable: React.FC<TokenTableProps> = (props) => {
  //   const rows = [createData("ETH", eth.eth, 0, 0), createData("rETH", 0, 0, 0)];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Token name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">USD</TableCell>
            <TableCell align="right">JPY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.usd}</TableCell>
              <TableCell align="right">{row.jpy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TokenTable;
