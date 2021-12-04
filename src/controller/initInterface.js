import loadViewer from "./loadViewer.js";
import * as d3 from 'd3';

export default function initInterface() {
    d3.select("#miserables-data").on("click", () => {
        d3.selectAll(".nav-item").select("a").classed("active", false);
        d3.select("#miserables-data").select("a").classed("active", true);
        loadViewer(data.miserables);
    })

    d3.select("#random-data").on("click", () => {
        d3.selectAll(".nav-item").select("a").classed("active", false);
        d3.select("#random-data").select("a").classed("active", true);
        loadViewer(data.randomData());
    })

    d3.select("main").append("div").attr("class", "cursor");
    const cursor = document.querySelector(".cursor");
    window.addEventListener("pointermove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    })
}

export function toggleCursor(){
    const cursor = d3.select(".cursor");
    if (cursor.style("display") == "block") {
        cursor.style("display", "none");
    }
    else {
        cursor.style("display", "block");
    }
}