import type { TIndex, TWaveAlgorithm } from './models';
import { clearMatrixWave, cloneMatrix, compareIndex, getBottomIndex, getCell, getLeftIndex, getRightIndex, getTopIndex } from './helpers';


/**
 * Волновой алгоритм поиска кратчайшего пути
 * @param matrix - Исходная матрица
 * @param startIndex - Координаты стартовой ячейки
 * @param finishIndex - Координаты финишной ячейки
 * @returns Массив координат кратчайшего пути
 */
export const waveAlgorithm: TWaveAlgorithm = (matrix, startIndex, finishIndex) => {
    const wavedMatrix = clearMatrixWave(cloneMatrix(matrix));
    const waveQueue: TIndex[] = [startIndex];

    while(waveQueue.length) {
        const currentIndex = waveQueue.shift() as TIndex;

        if (compareIndex(currentIndex, finishIndex)) break;

        const currentCell = getCell(wavedMatrix, currentIndex);
        currentCell.type = 'passed';
        console.log(currentCell);

        const adjacentIndexes: TIndex[] = [
            getTopIndex(currentIndex),
            getBottomIndex(currentIndex),
            getLeftIndex(currentIndex),
            getRightIndex(currentIndex),
        ];
        
        const freeIndexes = adjacentIndexes.filter(index => {
            try {
                const cell = getCell(wavedMatrix, index);
                const isFree = cell.type === 'free';
                if (isFree) {
                    cell.type = 'passed';
                    cell.value = currentCell.value + 1;
                }
                return isFree;
            } catch {
                return false;
            }
        });
        waveQueue.push(...freeIndexes.reverse());
    }

    const finishCell = getCell(wavedMatrix, finishIndex);
    const way: TIndex[] = [finishIndex];
    let currentIndex = finishIndex;
    while(true) {
        if (compareIndex(currentIndex, startIndex)) break;


        const adjacentIndexes: TIndex[] = [
            getTopIndex(currentIndex),
            getBottomIndex(currentIndex),
            getLeftIndex(currentIndex),
            getRightIndex(currentIndex),
        ];

        const passedIndexes = adjacentIndexes.filter(index => {
            try {
                const cell = getCell(wavedMatrix, index);
                return cell.type === 'passed';
            } catch {
                return false;
            }
        });

        if(!passedIndexes.length) break;
        else finishCell.type = 'way';

        const [ passedIndex ] = passedIndexes;

        let currentCell = getCell(wavedMatrix, passedIndex);
        let minIndex = passedIndex;

        for(const index of passedIndexes) {
            const cell = getCell(wavedMatrix, index);
            if(cell.value < currentCell.value) {
                currentCell = cell;
                minIndex = index;
            }
        }
        currentIndex = minIndex;
        currentCell.type = 'way';
        way.push(currentIndex);

    }
    if (way.length > 1) {
        way.forEach(wayIndex => {
            const adjacentIndexes: TIndex[] = [
                getTopIndex(wayIndex),
                getBottomIndex(wayIndex),
                getLeftIndex(wayIndex),
                getRightIndex(wayIndex),
            ];
            adjacentIndexes.forEach(index => {
                const cell = getCell(wavedMatrix, index);
                if (cell && (cell.type === 'passed'|| cell.type === 'free')) cell.type = 'way-forbidden';
            });
        });
    }

    return wavedMatrix;
};
