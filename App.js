import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Scatter, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Select from "react-select";
import "./styles.css";

const API_URL = "https://blackcoffer-api-gi84.onrender.com/data";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedEndYear, setSelectedEndYear] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedPEST, setSelectedPEST] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedSWOT, setSelectedSWOT] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  // Extract unique filter values
  const getUniqueValues = (key) => [
    ...new Set(data.map((item) => item[key]).filter(Boolean)),
  ];
  const countries = getUniqueValues("country");
  const regions = getUniqueValues("region");
  const sectors = getUniqueValues("sector");
  const endYears = getUniqueValues("end_year");
  const topics = getUniqueValues("topic");
  const pests = getUniqueValues("pestle");
  const sources = getUniqueValues("source");
  const swots = getUniqueValues("swot");
  const cities = getUniqueValues("city");

  // Apply filters
  const filteredData = data.filter(
    (item) =>
      (!selectedCountry || item.country === selectedCountry.value) &&
      (!selectedRegion || item.region === selectedRegion.value) &&
      (!selectedSector || item.sector === selectedSector.value) &&
      (!selectedEndYear || item.end_year === selectedEndYear.value) &&
      (!selectedTopic || item.topic === selectedTopic.value) &&
      (!selectedPEST || item.pestle === selectedPEST.value) &&
      (!selectedSource || item.source === selectedSource.value) &&
      (!selectedSWOT || item.swot === selectedSWOT.value) &&
      (!selectedCity || item.city === selectedCity.value)
  );

  // Chart Data
  const chartData = {
    labels: filteredData.map((d) => d.topic),
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((d) => d.intensity),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const likelihoodData = {
    labels: filteredData.map((d) => d.topic),
    datasets: [
      {
        label: "Likelihood",
        data: filteredData.map((d) => ({ x: d.likelihood, y: d.intensity })),
        backgroundColor: "rgba(255,99,132,0.6)",
      },
    ],
  };

  const relevanceData = {
    labels: filteredData.map((d) => d.topic),
    datasets: [
      {
        label: "Relevance",
        data: filteredData.map((d) => d.relevance),
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  };

  const topicDistributionData = {
    labels: getUniqueValues("topic"),
    datasets: [
      {
        label: "Topic Distribution",
        data: getUniqueValues("topic").map(
          (topic) => filteredData.filter((d) => d.topic === topic).length
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8A2BE2",
          "#32CD32",
          "#FF4500",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: {
      x: {
        ticks: { maxRotation: 45, minRotation: 0, autoSkip: true },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Blackcoffer Data Visualization</h2>

      {loading ? (
        <div className="loading">Loading Data...</div>
      ) : (
        <>
          <div className="filters">
            {[
              countries,
              regions,
              sectors,
              endYears,
              topics,
              pests,
              sources,
              swots,
              cities,
            ].map((filter, index) => (
              <Select
                key={index}
                options={filter.map((val) => ({ value: val, label: val }))}
                onChange={(value) => {
                  const stateSetters = [
                    setSelectedCountry,
                    setSelectedRegion,
                    setSelectedSector,
                    setSelectedEndYear,
                    setSelectedTopic,
                    setSelectedPEST,
                    setSelectedSource,
                    setSelectedSWOT,
                    setSelectedCity,
                  ];
                  stateSetters[index](value);
                }}
                placeholder={`Filter by ${
                  [
                    "Country",
                    "Region",
                    "Sector",
                    "End Year",
                    "Topic",
                    "PEST",
                    "Source",
                    "SWOT",
                    "City",
                  ][index]
                }`}
                isClearable
              />
            ))}
          </div>

          <div className="chart-container">
            <h3>Intensity Chart</h3>
            <Bar data={chartData} options={chartOptions} />

            <h3>Likelihood Chart</h3>
            <Scatter data={likelihoodData} options={chartOptions} />

            <h3>Relevance Chart</h3>
            <Bar data={relevanceData} options={chartOptions} />

            <h3>Topic Distribution</h3>
            <Pie data={topicDistributionData} />
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
