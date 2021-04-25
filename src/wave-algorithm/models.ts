/** Ячейка */
export interface ICell {
    /** Тип ячейки */
    type: 'free' | 'forbidden' | 'passed' | 'way' | 'way-forbidden';
    /** Значение ячейки */
    value: number;
    /** Цвет ячейки */
    color?: string;
}

/** Матрица */
export type TMatrix = ICell[][];

/** Координаты ячейки */
export type TIndex = [x: number, y: number];

/** Функция вычисления волнового алгоритма */
export type TWaveAlgorithm = (matrix: TMatrix, startIndex: TIndex, finishIndex: TIndex) => TMatrix;
