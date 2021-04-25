import { TMatrix } from '../../../wave-algorithm/models';

export const generateMatrix = (sizeX: number, sizeY: number): TMatrix => 
    new Array(sizeX).fill([]).map((c, columnIndex) => new Array(sizeY).fill({}).map((c, cellIndex) => {
        const edge = columnIndex === 0
            || columnIndex === sizeX - 1
            || cellIndex === 0
            || cellIndex === sizeY - 1;
        return {
            type: edge ? 'forbidden': 'free',
            value: 0,
        }
    }));