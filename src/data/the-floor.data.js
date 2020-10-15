
import { Line, Point } from "cinnamon-stick";

export const theFloorData = {
    points: [],
    lines: []
}

const total = 10;
const gap = 15;

let i = total;
while (i-- >= 0) {
    const k = i - 1;
    let j = total;
    while (j-- >= 0) {
        theFloorData.points.push(new Point(
            -gap/2 * total + i * gap,
            -5, 
            -gap/2 * total + j * gap
        ));

        const l = j - 1;

        theFloorData.lines.push(new Line(
            new Point(
                -gap/2 * total + i * gap,
                -5, 
                -gap/2 * total + j * gap
            ),
            new Point(
                -gap/2 * total + k * gap,
                -5, 
                -gap/2 * total + j * gap
            )
        ));

        theFloorData.lines.push(new Line(
            new Point(
                -gap/2 * total + i * gap,
                -5, 
                -gap/2 * total + j * gap
            ),
            new Point(
                -gap/2 * total + i * gap,
                -5, 
                -gap/2 * total + l * gap
            )
        ));
    }
}
