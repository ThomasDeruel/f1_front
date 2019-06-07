import React, {useEffect, useRef} from "react";
import ChartRadar from '../../helpers/ChartRadar/ChartRadar';
import './radar.css';

const Radar = ({labels, keys, data, allValues}) => {
    
    const chart = useRef("chart");

    useEffect(()=>{

      const scale = scaling(keys,allValues);

      const datasets = data.map((pilot,i)=>{
        const {backgroundColor} = radarStyle[i];

        return {
          label: `${pilot.forename} ${pilot.surename}`,
          data:keys.map(key=>{
          return (pilot[key]/scale[key])*100;
          }),
          backgroundColor,
        }
      })
      new ChartRadar(
        chart,
        labels,
        datasets
      )
    }, [data])

    return (
        <div className="radar-container">
            <canvas ref={chart}>
            
            </canvas>
        </div>
    )
}
function scaling(keys,allValues){
      let scaling = {};
      keys.forEach(key=>{
        allValues.forEach(value=>{
          if(scaling[key] === undefined || scaling[key] < value[key]){
            scaling[key] = value[key];
          }
        })
      })
      return scaling;
}

const radarStyle= [
  {
    backgroundColor:'rgba(200,0,0,0.4)'
  },
  {
     backgroundColor:'rgba(0,0,200,0.4)'
  }
]
export default Radar;