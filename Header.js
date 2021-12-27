import React from "react";
import "./header.css";
import ReactDOM from "react-dom";
import logo from '../../utility/images/designer.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faIndianRupeeSign,
  faChartLine,
  faHouse,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const element = <FontAwesomeIcon icon={faCoffee} size="lg" />;
  // const logo = <FontAwesomeIcon icon={faIndianRupeeSign} size="m" />;
  const chart = <FontAwesomeIcon icon={faChartLine} />;
  const house = <FontAwesomeIcon icon={faHouse} />;
  const create = <FontAwesomeIcon icon={faCirclePlus} />;

  return (
    <div className="expense-container">
      <div className="expense-header">
        <div className="expense-logo"> <img src={logo}></img> Expenses</div>
        <div className="expense-menu-container">
          <div className="expense-menu-item">
            <div className="menu-item"><div>{house}</div> Home</div>
            <div className="menu-item"><div>{chart}</div> expenses graph</div>
            <div className="menu-item"><div>{create}</div>Add new Expense</div>
          </div>
        </div>
      </div>
    </div>
  );
}
