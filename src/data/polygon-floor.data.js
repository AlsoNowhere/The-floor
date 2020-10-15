import { Point, Polygon } from "cinnamon-stick";

export const polygonFloor = [];

const gap = 15;
const total = 16;
const height = -13;

const random = () => Math.floor(Math.random()*100) + 100;

Array(total).fill(null).forEach((_, i) => {
    Array(total).fill(null).forEach((_, j) => {
        polygonFloor.push(new Polygon(
            [
                new Point((-total/2 * gap) + i * gap, height, 0 + j * gap),
                new Point((-total/2 * gap) + (i + 1) * gap, height, 0 + j * gap),
                new Point((-total/2 * gap) + (i + 1) * gap, height, 0 + (j + 1) * gap),
                new Point((-total/2 * gap) + i * gap, height, 0 + (j + 1) * gap),
            ], { colour: `rgba(52, ${random()}, ${random()}, 0.7)` }
        ));
    });
});
