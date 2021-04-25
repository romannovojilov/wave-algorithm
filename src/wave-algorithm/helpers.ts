import { ICell, TIndex, TMatrix } from './models';

const createIndexGetter = ([xDiff, yDiff]: TIndex) =>
    ([x, y]: TIndex): TIndex => [x+xDiff, y+yDiff];

export const getTopIndex = createIndexGetter([0, -1]);
export const getBottomIndex = createIndexGetter([0, 1]);
export const getLeftIndex = createIndexGetter([-1, 0]);
export const getRightIndex = createIndexGetter([1, 0]);

/**
 * Получить ячейку матрицы по координатам
 * @param matrix - Матрица
 * @param index - Координаты
 * @returns Ячейка
 * @throws Ячейка по заданным координатам не найдена
 */
export const getCell = (matrix: TMatrix, [x, y]: TIndex): ICell | never => {
    const cell = matrix[x][y];
    if (!cell) throw new Error(`Ячейка по координатам [${x}, ${y}] не найдена`);
    return cell;
};

/**
 * Сравнить индексы
 * @param index1 - Первый индекс
 * @param index2 - Второй индекс
 */
 export const compareIndex = ([x1, y1]: TIndex, [x2, y2]: TIndex): boolean => x1 === x2 && y1 === y2;

 /**
  * Глубокое клонирование матрицы
  */
 export const cloneMatrix = (matrix: TMatrix): TMatrix => matrix.map(column => column.map(cell => ({...cell})));

 /**
  * Очистить волну
  */
 export const clearMatrixWave = (matrix: TMatrix): TMatrix => matrix.map(column => column.map(cell => {
     if (cell.type === 'passed') {
         cell.type = 'free';
         cell.value = 0;
    }
     return cell;
 }));