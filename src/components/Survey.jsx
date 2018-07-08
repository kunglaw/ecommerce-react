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
                   data={[
                    {x: 'Mountain', y: 3},
                    {x: 'Sea', y: 7},
                    {x: 'Beach', y: 2},
                    {x: 'Old Town', y: 1}
                  ]}/>
            </XYPlot>
      </div>
    );
  }
}

export default Survey;