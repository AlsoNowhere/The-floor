
import { Line, Point } from "cinnamon-stick";

const generateSquare = (size, start, colour = "teal") => {
    const arr = [];
    arr.push(

// Front.
        new Line(
            new Point(start.x,start.y,start.z),
            new Point(start.x+size,start.y,start.z),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y,start.z),
            new Point(start.x+size,start.y+size,start.z),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y+size,start.z),
            new Point(start.x,start.y+size,start.z),
            {colour}
        ),
        new Line(
            new Point(start.x,start.y+size,start.z),
            new Point(start.x,start.y,start.z),
            {colour}
        ),

// Back.
        new Line(
            new Point(start.x,start.y,start.z+size),
            new Point(start.x+size,start.y,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y,start.z+size),
            new Point(start.x+size,start.y+size,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y+size,start.z+size),
            new Point(start.x,start.y+size,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x,start.y+size,start.z+size),
            new Point(start.x,start.y,start.z+size),
            {colour}
        ),

// Front to back lines.
        new Line(
            new Point(start.x,start.y,start.z),
            new Point(start.x,start.y,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y,start.z),
            new Point(start.x+size,start.y,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x+size,start.y+size,start.z),
            new Point(start.x+size,start.y+size,start.z+size),
            {colour}
        ),
        new Line(
            new Point(start.x,start.y+size,start.z),
            new Point(start.x,start.y+size,start.z+size),
            {colour}
        ),

    );
    return arr;
}

export const dataLines = [
    ...generateSquare(10, new Point(0,0,100), "blue"),
    ...generateSquare(15, new Point(-20,5,100)),
    ...generateSquare(3, new Point(30,-3,100), "red"),
    ...generateSquare(7, new Point(-30,-7,100), "yellow"),
];
