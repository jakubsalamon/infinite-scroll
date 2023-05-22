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

function App() {
  const [rowsChunk, setRowsChunk] = useState<
    {
      name: string;
      calories: number;
      fat: number;
      carbs: number;
      protein: number;
    }[]
  >([]);

  const rowRef = useRef<IntersectionObserver>();

  useEffect(() => {
    setRowsChunk(rows);
  }, []);

  const intersectedElementRef = (nodeItem: HTMLDivElement) => {
    if (rowRef.current) {
      rowRef.current.disconnect();
    }

    rowRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          console.log("ref element is on the screen");
          setRowsChunk((prev) => [...prev, ...rows]);
        }
      }
    );

    if (nodeItem) {
      rowRef.current.observe(nodeItem);
    }
  };

  return (
    <article className="container">
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
                <div key={index} ref={intersectedElementRef}>
                  <RowItem
                    name={row.name}
                    calories={row.calories}
                    fat={row.fat}
                    carbs={row.carbs}
                    protein={row.protein}
                  />
                </div>
              ) : (
                <div>
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
    </article>
  );
}

export default App;
