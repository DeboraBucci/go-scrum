import { Switch } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { calculateDifficultyPoints } from "../../functions/calculateDifficultyPoints";
import { sumMinutesInTask } from "../../functions/sumMinutesInTask";
import { difficultyOpt, importanceOpt, username } from "../../data";

const FilterTasks = ({ SetRenderTasks, tasks }) => {
  const [difficulty, setDifficulty] = useState("all");
  const [importance, setImportance] = useState("all");
  const [switchFilter, setSwitchFilter] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [sorting, setSorting] = useState("none");
  const [sortIcon, setSortIcon] = useState("up");

  // FUNCTIONS
  const filterBy = (arr, key, value, conditional) =>
    conditional ? arr.filter((task) => task[key] === value) : arr;

  const sortBy = useCallback(
    (arr, check, func) => {
      if (sorting === check) {
        if (sortIcon === "down") return arr.slice().sort((a, b) => func(a, b));
        if (sortIcon === "up") {
          return arr.slice().sort((a, b) => func(b, a));
        }
      }

      return arr;
    },
    [sorting, sortIcon]
  );

  const sortTimeOperator = useCallback(
    (numA, numB) => sumMinutesInTask(numA) - sumMinutesInTask(numB),
    []
  );

  const sortDiffOperator = useCallback((numA, numB) => {
    const { numA: newNumA, numB: newNumB } = calculateDifficultyPoints(
      numA,
      numB
    );
    return newNumA - newNumB;
  }, []);

  useEffect(() => {
    // FILTERS -----------------------------------------------------------------
    const diffFilteredArr = filterBy(
      tasks,
      "difficulty",
      difficulty,
      difficulty !== "all"
    );
    const impFilteredArr = filterBy(
      diffFilteredArr,
      "importance",
      importance,
      importance !== "all"
    );
    const mineFilteredArr = filterBy(
      impFilteredArr,
      "author",
      username,
      switchFilter
    );

    // SORTING -----------------------------------------------------------------
    const timeSortedArr = sortBy(mineFilteredArr, "time", sortTimeOperator);
    const diffSortedArr = sortBy(timeSortedArr, "difficulty", sortDiffOperator);

    // SEARCHED ----------------------------------------------------------------
    searchedText !== ""
      ? SetRenderTasks(
          diffSortedArr.filter((task) =>
            task.name.toLowerCase().includes(searchedText)
          )
        )
      : SetRenderTasks(diffSortedArr);
  }, [
    tasks,
    SetRenderTasks,
    searchedText,
    difficulty,
    sorting,
    importance,
    sortIcon,
    switchFilter,
    sortBy,
    sortTimeOperator,
    sortDiffOperator,
  ]);

  // EVENT HANDLERS
  const searchTextHandler = (e) => setSearchedText(e.target.value);
  const importanceHandler = (e) => setImportance(e.target.value);
  const difficultyHandler = (e) => setDifficulty(e.target.value);
  const sortHandler = (e) => setSorting(e.target.value);
  const switchHandler = (e) => setSwitchFilter(e.target.checked);
  const sortingDirectionHandler = () =>
    sortIcon === "down" ? setSortIcon("up") : setSortIcon("down");

  return (
    <div className="filter">
      <div className="filter__group">
        <h4 className="filter__title">Filtrar</h4>

        <select onChange={importanceHandler}>
          <option value="all">importancia</option>
          {importanceOpt.map((opt) => (
            <option key={opt.val} value={opt.val}>
              {opt.name}
            </option>
          ))}
        </select>

        <select onChange={difficultyHandler}>
          <option value="all">dificultad</option>
          {difficultyOpt.map((opt) => (
            <option key={opt.val} value={opt.val}>
              {opt.name}
            </option>
          ))}
        </select>

        <div>
          <span>Mostrar solo mías</span>
          <Switch
            color="secondary"
            onChange={switchHandler}
            label="show my tasks"
          />
        </div>

        <h4 className="filter__title">Ordenar</h4>

        <div>
          <select onChange={sortHandler}>
            <option value="none">Ordenar por...</option>
            <option value="time">tiempo</option>
            <option value="difficulty">dificultad</option>
          </select>
          <button
            onClick={sortingDirectionHandler}
            disabled={sorting === "none"}
            className="filter__sorting--btn"
          >
            <i
              className={`fa-solid fa-arrow-down-${
                sortIcon === "down" ? "short-wide" : "wide-short"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <div className="filter__group">
        <h4 className="filter__title">Buscar por nombre</h4>
        <div>
          <input placeholder="Escribe aquí" onChange={searchTextHandler} />
        </div>
      </div>
    </div>
  );
};

export default FilterTasks;
