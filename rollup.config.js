
import { dillx } from "rollup-plugin-dillx";
import resolve from "@rollup/plugin-node-resolve";

const output = [
    {
        file: "./dist/app.js",
        format: "iife"
    }
]

export default {
    input: "./src/main.js",
    output,
    plugins: [
        dillx(),
        resolve()
    ],
    watch: {
        exclude: "node_modules/**"
    }
}
