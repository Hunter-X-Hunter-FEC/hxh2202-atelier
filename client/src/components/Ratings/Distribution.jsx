import React, { useState, useEffect } from "react";
import DistributionItem from "./DistributionItem.jsx";
import Ratings from "./Ratings.jsx";
import styled from "styled-components";
// import averageRating, {oneCount, twoCount, threeCount, fourCount, fiveCount, numberOfReviews} from '../common/oneMeta.js';

const Distribution = ({ distribution }) => {
  // console.log('props.distribution inside of Distribution.jsx: ', props.);

  const [distributionData, setDistributionData] = useState({ data: [], total: 0});

  useEffect(() => {


    const data = {}
    let total = 0

    for (let i = 0; i < 5; i++) {
      const distributionValue = distribution?.[i + 1] || "0";
      data[i + 1] = distributionValue;
      total = total + parseInt(distributionValue);
    }
    setDistributionData({ data, total });
  }, [distribution])

  return (
    <>
      {Object.entries(distributionData.data)?.map(([key, value]) => {
        return <DistributionItem key={key} stars={key} value={value} max={distributionData.total} />
      })
      }
    </>
  );
};

export default Distribution;
