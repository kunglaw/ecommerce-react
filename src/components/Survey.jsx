import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries} from 'react-vis';


class Survey extends Component {
  render() {
    return (
      <div>
         <XYPlot
                width={700}
                height={500}
                xType="ordinal"
                stackBy="x"
                >
                <HorizontalGridLines />
                <VerticalGridLines />
                <YAxis />
                <XAxis />
                <VerticalBarSeries
                    color="#79C7E3"
                    onSeriesMouseOver={({ event })=>{
                      let target = event.target
                      target.style.transition = "0.8s"
                      target.style.fill = "#2979FF"
                      target.style.transform = "translate(0, -20px)"

                    }}
                    onSeriesMouseOut={({ event })=>{
                      let target = event.target
                      target.style.fill = "#79C7E3"
                      target.style.transform = "translate(0, 0)"
                    }}
                    data={[
                    {x: 'Mountain', y: 3},
                    {x: 'Sea', y: 7},
                    {x: 'Beach', y: 2},
                    {x: 'Old Town', y: 1},
                    {x: 'City', y: 5},
                    {x: 'Theatre', y: 8},
                    {x: 'Young Town', y: 9}
                    ]}
                    stroke={'#ddd'}
                    strokeWidth={2}/>
            </XYPlot>
      </div>
    );
  }
}

export default Survey;