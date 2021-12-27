import React,{ useEffect } from 'react'
import {Chart, PieController,ArcElement,LineController,CategoryScale, LinearScale, PointElement, LineElement} from "chart.js";

export default function DognutChart() {

    Chart.register(PieController, ArcElement,LineController,CategoryScale,LinearScale,PointElement,LineElement)
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "doughnut",
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
            <canvas id="myChart" width="400" height="400" />
        </div>
    )
}
