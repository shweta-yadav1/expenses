import React,{ useEffect } from 'react'
import {Chart, PieController,ArcElement,LineController,CategoryScale, LinearScale, PointElement, LineElement} from "chart.js";

export default function LineChart() {

    Chart.register(PieController, ArcElement,LineController,CategoryScale,LinearScale,PointElement,LineElement)
    useEffect(() => {
        const ctx1 = document.getElementById("myChart1");
        new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Green",
                  "Purple",
                  "Orange"
                ],
                borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                borderWidth: 2

              }
            ]
          }
        });
        
      });
    return (
        <div>
            <canvas id="myChart1" width="400" height="400" />
        </div>
    )
}
