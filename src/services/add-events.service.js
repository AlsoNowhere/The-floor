import { Direction, Point, RADIANS } from "cinnamon-stick";

export const addEvents = scope => {
    document.body.addEventListener("keyup", event => {
        const key = event.code;
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(key)) {
            return;
        }

        // if (key === "ArrowLeft") {
        //     scope.cinnamon.centre = new Point(scope.cinnamon.centre.x - 5, scope.cinnamon.centre.y, scope.cinnamon.centre.z);
        // }
        // if (key === "ArrowRight") {
        //     scope.cinnamon.centre = new Point(scope.cinnamon.centre.x + 5, scope.cinnamon.centre.y, scope.cinnamon.centre.z);
        // }
        // if (key === "ArrowUp") {
        //     scope.cinnamon.centre = new Point(scope.cinnamon.centre.x, scope.cinnamon.centre.y + 5, scope.cinnamon.centre.z);
        // }
        // if (key === "ArrowDown") {
        //     scope.cinnamon.centre = new Point(scope.cinnamon.centre.x, scope.cinnamon.centre.y - 5, scope.cinnamon.centre.z);
        // }

        if (key === "ArrowUp") {
            scope.cinnamon.centre = new Point(
                scope.cinnamon.centre.x + Math.sin(scope.cinnamon.direction.zx / RADIANS) * 5,
                scope.cinnamon.centre.y,
                scope.cinnamon.centre.z + Math.cos(scope.cinnamon.direction.zx / RADIANS) * 5
            );
        }
        if (key === "ArrowDown") {
            scope.cinnamon.centre = new Point(
                scope.cinnamon.centre.x + Math.sin(scope.cinnamon.direction.zx / RADIANS) * -5,
                scope.cinnamon.centre.y,
                scope.cinnamon.centre.z + Math.cos(scope.cinnamon.direction.zx / RADIANS) * -5
            );
        }

        scope.datRenderDoh();
    });




    let mouseDown = false;
    let mouseIsAt = null;

    document.body.addEventListener("mousedown", event => {
        mouseDown = true;
        mouseIsAt = {x:event.clientX,y:event.clientY};
    });
    document.body.addEventListener("mousemove", event => {
        if (!mouseDown) {
            return;
        }
        let Dx = mouseIsAt.x - event.clientX;
        let Dy = mouseIsAt.y - event.clientY;
        if (Dx * (Dx < 0 ? -1 : 1) > 5) {
            mouseIsAt.x = event.clientX;
            scope.cinnamon.direction = new Direction(scope.cinnamon.direction.zx + 1 * (Dx < 0 ? 1 : -1), scope.cinnamon.direction.y);
            scope.datRenderDoh();
        }
        if (Dy * (Dy < 0 ? -1 : 1) > 5) {
            mouseIsAt.y = event.clientY;
            scope.cinnamon.direction = new Direction(scope.cinnamon.direction.zx, scope.cinnamon.direction.y + 1 * (Dy < 0 ? 1 : -1));
            scope.datRenderDoh();
        }
    });
    document.body.addEventListener("mouseup", event => {
        mouseDown = false;
        mouseIsAt = null;
    });



}
