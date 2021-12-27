import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faIndianRupeeSign,
  faChartLine,
  faHouse,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

export default function Icons() {

    const element = <FontAwesomeIcon icon={faCoffee} size="lg" />;
    const logo = <FontAwesomeIcon icon={faIndianRupeeSign} size="m" />;
    const chart = <FontAwesomeIcon icon={faChartLine} />;
    const house = <FontAwesomeIcon icon={faHouse} />;
    const create = <FontAwesomeIcon icon={faCirclePlus} />;
    return (
        <div>
            
        </div>
    )
}
