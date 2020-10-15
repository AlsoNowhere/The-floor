
import { dill } from "dill-framework";

import { CinnamonStick, Direction, Point, Setup } from "cinnamon-stick";

import { addEvents } from "../services/add-events.service";

// import { wallData } from "../data/the-wall.data";
// import { theFloorData } from "../data/the-floor.data";
// import { dataLines } from "../data/data-lines.data";

// import { cubes } from "../data/cubes.data";
import { polygonFloor } from "../data/polygon-floor.data";

export const App = function(){

    this.oninit = function(){

        this.cinnamon = new CinnamonStick(
            // this.svg,
            this.canvas,
            new Setup(
                new Point(0, 0, -100),
                // new Direction(10, 0)
                // new Direction(10, 10)
            )
        );

        // this.cinnamon.points = [
            // new Point(0, 0, 100),
            // new Point(10, 10, 100),
        // ];
        // this.cinnamon.points = wallData;
        // this.cinnamon.points = theFloorData.points;
        // this.cinnamon.lines = theFloorData.lines;
        // this.cinnamon.lines = dataLines;

        // this.cinnamon.polygons = cubes;
        this.cinnamon.polygons = polygonFloor;

        this.datRenderDoh();

        addEvents(this);
    }

    this.cinnamon = null;
    // this.svg = null;
    this.canvas = null;
    // this.points = [];
    // this.lines = [];
    this.polygons = [];
    this.svgStyles = `
        width: 100%;
        height: 100%;
    `;
    this.datRenderDoh = function(){
        const {
            points: newPoints,
            lines: newLines,
            polygons: newPolygons
        } = this.cinnamon.render();

        /* SVG Element */
        // this.points = newPoints;
        // this.lines = newLines;
        // this.polygons = newPolygons;
        // dill.change(this);


        /* CANVAS Element */
        const { clientWidth: width, clientHeight: height } = this.canvas;
        const context = this.canvas.getContext("2d");

        // context.fillStyle = "#fff";
        context.fillStyle = "#444";
        context.fillRect(0, 0, width, height);

        newPolygons.forEach(polygon => {

            context.fillStyle = polygon.colour;
            context.beginPath();

            {
                const {width, height} = polygon.points[0];
                context.moveTo(width, height);
            }

            polygon.points.slice(1).forEach(point => {
                const {width, height} = point;
                context.lineTo(width, height);
            });

            context.closePath();
            context.fill();
        });
    }

    this.calculatePoints = function(){
        return this._item.points.map(x => `${x.width},${x.height}`).join(" ");
    }

    return dill(
        // <svg style-="svgStyles" svg--->
        //     <polygon points-="calculatePoints" fill-="colour" dill-for="polygons" />
        //     <line x1-="startWidth" y1-="startHeight" x2-="endWidth" y2-="endHeight" stroke-width="2" stroke-="colour" dill-for="lines" />
        //     <circle cx-="width" cy-="height" r="3" fill="red" dill-for="points" />
        // </svg>

        <canvas canvas---></canvas>
    )
}
