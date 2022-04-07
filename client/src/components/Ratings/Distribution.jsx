import React from 'react'
import DistributionItem from './DistributionItem.jsx';
import averageRating, {oneCount, twoCount, threeCount, fourCount, fiveCount, numberOfReviews} from '../common/oneMeta.js';

const Distribution = () => {
  return (
    <div>
      < DistributionItem stars={1} value={oneCount} max={numberOfReviews}/>
      < DistributionItem stars={2} value={twoCount} max={numberOfReviews}/>
      < DistributionItem stars={3} value={threeCount} max={numberOfReviews}/>
      < DistributionItem stars={4} value={fourCount} max={numberOfReviews}/>
      < DistributionItem stars={5} value={fiveCount} max={numberOfReviews}/>
      <div className="Distribution"> Distribution Component Here </div>
    </div>
  )
}

export default Distribution;