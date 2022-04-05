import React from 'react'
import DistributionItem from './DistributionItem.jsx';
import averageRating from '../common/oneMeta.js';

const Distribution = () => {
  return (
    <div>
      < DistributionItem value={averageRating * 10} max={100}/>
      <div className="Distribution"> Distribution Component Here </div>
    </div>
  )
}

export default Distribution;