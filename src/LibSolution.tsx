import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { rows } from "./mockedData";
import { RowItem } from "./RowItem";
import { useInView } from "react-intersection-observer";

export const LibSolution = () => {
  const [rowsChunk, setRowsChunk] = useState<
    {
      name: string;
      calories: number;
      fat: number;
      carbs: number;
      protein: number;
    }[]
  >([]);

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      console.log("ref element is on the screen from lib solution");
      setRowsChunk((prev) => [...prev, ...rows]);
    }
  }, [inView]);

  useEffect(() => {
    setRowsChunk(rows);
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsChunk.map((row, index) => {
            return index === rowsChunk.length - 4 ? (
              <div key={index} ref={ref}>
                <RowItem
                  name={row.name}
                  calories={row.calories}
                  fat={row.fat}
                  carbs={row.carbs}
                  protein={row.protein}
                />
              </div>
            ) : (
              <div key={index}>
                <RowItem
                  name={row.name}
                  calories={row.calories}
                  fat={row.fat}
                  carbs={row.carbs}
                  protein={row.protein}
                />
              </div>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
