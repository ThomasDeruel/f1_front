import React, {useEffect, useRef} from "react";
import ChartRadar from '../../helpers/ChartRadar/ChartRadar';
const Radar = ({labels, keys, data, allValues}) => {
    
    const chart = useRef("chart");

    useEffect(()=>{

      const scale = scaling(keys,allValues);

      const datasets = data.map(pilot=>{
        return {
          label: `${pilot.forename} ${pilot.surename}`,
          data:keys.map(key=>{

          return (pilot[key]/scale[key])*100;
          })
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

function style(){
  return {
    pointRotation:9
  }
}
export default Radar;