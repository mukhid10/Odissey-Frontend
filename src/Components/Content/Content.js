import React, { useEffect, useState } from "react";

import "./content.css";

import {
  getDataTotal,
  getRecoveredTotal,
  getCriticalTotal,
  getDeathsTotal,
} from "../../Redux/actions/dataTotal";

import AutoComplete from "rsuite/AutoComplete";
import axios from "axios";
import { useDispatch } from "react-redux";

import { BsSearch } from "react-icons/bs";

function Content() {
  const [dataHistory, setDataHistory] = useState();
  const [autoComplete, setAutoComplete] = useState([]);
  const [search, setsearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getDataHistoty();
  }, []);

  const getDataHistoty = async () => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "X-RapidAPI-Key": "44e6f8d781msh28b178fd0c72d21p163329jsnd5839a8ddd75",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const country = response.data.response.map((value) =>
          value.country.toLowerCase()
        );
        setAutoComplete(country);
        sumComfirmed(response.data.response.map((value) => value.cases.total));
        sumRecovered(
          response.data.response.map((value) => value.cases.recovered)
        );
        sumCritical(
          response.data.response.map((value) => value.cases.critical)
        );
        sumDeaths(response.data.response.map((value) => value.deaths.total));
        setDataHistory(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //Handle search
  const keys = ["country"];
  const handleSearch = () => {
    return search
      ? dataHistory.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(search))
        )
      : false;
  };

  const dataSearch = handleSearch();
  const dataTable = dataSearch ? dataSearch : dataHistory;

  const sumComfirmed = (data) => {
    let rest = null;

    for (let i = 0; i < data.length; i++) {
      rest += data[i];
    }
    dispatch(getDataTotal(rest));
  };

  const sumRecovered = (data) => {
    let rest = null;

    for (let i = 0; i < data.length; i++) {
      rest += data[i];
    }
    dispatch(getRecoveredTotal(rest));
  };

  const sumCritical = (data) => {
    let rest = null;
    for (let i = 0; i < data.length; i++) {
      rest += data[i];
    }
    dispatch(getCriticalTotal(rest));
  };

  const sumDeaths = (data) => {
    let rest = null;

    for (let i = 0; i < data.length; i++) {
      rest += data[i];
    }
    dispatch(getDeathsTotal(rest));
  };

  return (
    <div className="content-container">
      <div className="content-header">
        <h4 className="text-secondary">Statistic</h4>
        <span className="d-flex align-items-center list-search bg-light rounded-3 p-1 ">
          <BsSearch color="gray" fontSize="20px" />
          <AutoComplete
            placeholder="Search . . ."
            id="content-input"
            onChange={(e) => setsearch(e)}
            data={autoComplete}
          />
        </span>
      </div>
      <div>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">NO</th>
              <th scope="col">Country</th>
              <th scope="col">Comfirmed</th>
              <th scope="col">Active</th>
              <th scope="col">Recovered</th>
              <th scope="col">Critical</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {dataTable &&
              dataTable.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.country == null ? 0 : item.country}</td>
                  <td>{item.cases.total}</td>
                  <td>{item.cases.active == null ? 0 : item.cases.active}</td>
                  <td>
                    {item.cases.recovered == null ? 0 : item.cases.recovered}
                  </td>
                  <td>
                    {item.cases.critical == null ? 0 : item.cases.critical}
                  </td>
                  <td>{item.deaths.total == null ? 0 : item.deaths.total}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
