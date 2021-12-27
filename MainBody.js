import React from "react";
import Cards from "../cards/Cards";
import DognutChart from "./DognutChart";
import ExpenseTable from "./ExpenseTable";
import LineChart from "./LineChart";
import "./mainbody.css";

export default function MainBody() {
  return (
    <div className="expense-main-body">
      <Cards></Cards>
      <div className="expense-chart-container">
        <div className="expense-chart">
          <div className="charts">
            <LineChart />
            <DognutChart />
          </div>
        </div>
      </div>

      <div className="expense-table">
        <ExpenseTable />
      </div>
    </div>
  );
}
