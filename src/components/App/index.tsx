import React, { ChangeEvent, useState } from 'react';

import type { ICell, TIndex, TMatrix } from '../../wave-algorithm/models';
import { cloneMatrix, compareIndex, getCell } from '../../wave-algorithm/helpers';
import { waveAlgorithm } from '../../wave-algorithm';

import { generateMatrix } from './helpers/generate-matrix';
import { getScheme } from './helpers/get-scheme';
import './styles.css';

const DEFAULT_SIZE_X = 50;
const DEFAULT_SIZE_Y = 35;

const initialMatrix: TMatrix = generateMatrix(DEFAULT_SIZE_X, DEFAULT_SIZE_Y);
const allowedTypes: ICell['type'][] = ['free', 'passed'];

const getColor = (type: ICell['type']): string | undefined => {
  switch(type) {
    case 'forbidden': return 'gray';
    case 'way': return 'green';
    case 'way-forbidden': return 'white';
    default: return undefined;
  }
};

const getCellStyles = (matrix: TMatrix, index: TIndex, startIndex: TIndex | null, finishIndex: TIndex | null) => {
  const cell = getCell(matrix, index);
  const isStartCell = startIndex ? compareIndex(index, startIndex) : false;
  const isFinishCell = finishIndex ? compareIndex(index, finishIndex) : false;

  const color = isStartCell || isFinishCell ? 'purple' : cell.color || getColor(cell.type)

  return {
    background: color,
    cursor: allowedTypes.includes(cell.type) ? 'pointer': 'not-allowed',
  };
};

function App() {

  const [matrix, setMatrix] = useState<TMatrix>(initialMatrix);
  const [startIndex, setStartIndex] = useState<TIndex | null>(null);
  const [finishIndex, setFinishIndex] = useState<TIndex | null>(null);

  const selectPoint = (index: TIndex) => {
    const cell = getCell(matrix, index);
    if (allowedTypes.includes(cell.type)) {
      if (startIndex && compareIndex(startIndex, index)) {
        setStartIndex(null);
        return;
      }
  
      if (!startIndex) setStartIndex(index);
      else {
        const startCell = getCell(matrix, startIndex);
        const finishCell = getCell(matrix, index);
        if (startCell.color === 'red' && finishCell.color === 'red') {
          setMatrix(waveAlgorithm(matrix, startIndex, index));
          setStartIndex(null);
          setFinishIndex(null);
        } else {
          setStartIndex(index);
          setFinishIndex(null);
        }
      }
    }

  };

  const clear = () => {
    setMatrix(generateMatrix(sizeX, sizeY));
    setStartIndex(null);
    setFinishIndex(null);
  }

  const [sizeX, setSizeX] = useState(DEFAULT_SIZE_X);
  const [sizeY, setSizeY] = useState(DEFAULT_SIZE_Y);

  const changeSize = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = +e.target.value;

    switch(e.target.name) {
      case 'x': {
        const size = Number.isNaN(value) || value < 5 ? 5 : value > 50 ? 50 : value;
        setSizeX(size);
        setMatrix(generateMatrix(size, sizeY));
      }
      break;
      case 'y': {
        const size = Number.isNaN(value) || value < 5 ? 5 : value > 50 ? 50 : value;
        setSizeY(size);
        setMatrix(generateMatrix(sizeX, size));
      }
      break;
    }
  }

  const addScheme = () => {
    const scheme = getScheme();
    const matrixBuff = cloneMatrix(matrix);

    try {
      scheme.forEach((column, columnIndex) => {
        column.forEach((cell, cellIndex) => {
          const matrixCell = matrixBuff[columnIndex + startIndex![0]][cellIndex + startIndex![1]];
          if (matrixCell.type !== 'free' && matrixCell.type !== 'passed') {
            throw new Error('Недостаточно места для монтирования');
          }
          matrixCell.type = cell.type;
          matrixCell.value = cell.value;
          matrixCell.color = cell.color;
        });
      });
      setMatrix(matrixBuff);
    } catch {
      alert('Недостаточно места для монтирования');
    }

    setStartIndex(null);
  }

  return (
    <div className="App-wrapper">
      <div className="App-sidebar">
        <div>
          <span>Количество колонок (от 5 до 50):</span><br/>
          <input type="number" value={sizeX} name="x" min="5" max="50" onChange={changeSize} />
        </div>
        <div>
          <span>Количество строк (от 5 до 50):</span><br/>
          <input type="number" value={sizeY} name="y" min="5" max="50" onChange={changeSize} />
        </div>
        <br />
        <div>
          <button disabled={!startIndex} onClick={() => addScheme()}>Добавить микросхему</button>
          <br />
          <br />
          <button onClick={() => clear()}>Сбросить</button>
        </div>
        <br/>
      </div>
      <div className="App">
        {matrix.map((column, columnIndex) => {
          return <div className="App-column">
            {column.map((cell, cellIndex) => {
              const index: TIndex = [columnIndex, cellIndex];
              return <div
                className="App-cell"
                style={getCellStyles(matrix, index, startIndex, finishIndex)}
                onClick={() => selectPoint(index)}
              >{cell.type === 'way-forbidden' ? 'ЭЗ' : cell.type === 'passed' ? cell.value : ''}</div>
            })}
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
