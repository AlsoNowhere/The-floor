
import { Point } from "cinnamon-stick";

export const wallData = [];

let i = 10;
while (i-- >= 0) {
    let j = 10;
    while (j-- >= 0) {
        wallData.push(new Point(-50 + i * 10, -50 + j * 10, 100));
    }
}
