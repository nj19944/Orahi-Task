import React from 'react'
import './demo.css'

function BarGroup(props) {
    let barPadding = 3
    let barColour = '#348AA7'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.stat / 4.27)
    let yMid = props.barHeight * 0.5
    
    return(
      <>
     <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.month}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />

    </g>
          <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle" >{props.d.stat}</text>
          </>
    )}
  
  export default class BarChart extends React.Component {
  
    render() {
      let barHeight = 20
          
      let barGroups = this.props.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`} key={d.month} >
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="800" height="300" >
        <g className="container">
          <text className="title" x="10" y="30">Bar Chart</text>
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
 