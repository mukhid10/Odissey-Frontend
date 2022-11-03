import React from "react";

import "./header.css";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { BsFillBarChartFill } from "react-icons/bs";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { AiOutlineFall, AiOutlineFlag } from "react-icons/ai";

function Header() {
  const data = useSelector((state) => state.dataTotalWorld);

  return (
    <div className="header-container">
      <h3 className="text-white">World Covid Data</h3>
      <div className="header-content">
        <motion.div
          className="box-header-content"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <span>
            <p className="text-secondary mb-2">CONFIRMED</p>
            <p className="fw-bold">{data.confirmed}</p>
          </span>
          <span className="wrapper-icon-header bg-primary">
            <BsFillBarChartFill color="white" fontSize="20px" />
          </span>
        </motion.div>
        <motion.div
          className="box-header-content"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <span>
            <p className="text-secondary mb-2">RECOVERED</p>
            <p className="fw-bold">{data.recovered}</p>
          </span>
          <span className="wrapper-icon-header bg-success">
            <RiDeviceRecoverLine color="white" fontSize="25px" />
          </span>
        </motion.div>
        <motion.div
          className="box-header-content"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <span>
            <p className="text-secondary mb-2">CRITICAL</p>
            <p className="fw-bold">{data.critical}</p>
          </span>
          <span className="wrapper-icon-header bg-warning">
            <AiOutlineFall color="white" fontSize="27px" />
          </span>
        </motion.div>
        <motion.div
          className="box-header-content"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <span>
            <p className="text-secondary mb-2">DEATHS</p>
            <p className="fw-bold">{data.deaths}</p>
          </span>
          <span className="wrapper-icon-header bg-danger">
            <AiOutlineFlag color="white" fontSize="23px" />
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
