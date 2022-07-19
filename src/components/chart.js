import {Line} from "react-chartjs-2"

var labels = []


function BarChart(props){
    for (let i=1; i<=props.ratings.teams[0].ratings.length; i++){labels.push(i.toString())}
    const data = {
        labels,
        datasets:[],
    };
for (let i=0; i<props.ratings.teams.length; i++){
    const team = props.ratings.teams[i]
    const name = team.name
    const color = team.color
    const ratings = team.ratings
    const team_data = {
        label:name,
        data:ratings,
          borderColor:color,

          borderWidth:3,
          fill:false,
          tension:0.1,
          borderJoinStyle:'round',
        
    }
    data.datasets.push(team_data)
};

const options = {
    elements: {
        point:{
            radius: 3,     
            usePointStyle:true,
        }
    },
    maintainAspectRatio: false,
    responsive:true,
    legend:{
        labels:{
            fontColor:'rgb(255, 255, 255)',
            usePointStyle: true,
        }
    },
    
    scales:{
        xAxes:[{
            display:true,
            ticks:{
                fontColor:'white'
            },
            gridLines:{
                display:true,
                color:'white',
                lineWidth:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            },
            scaleLabel:{
                display:true,
                fontColor:'rgb(255, 255, 255)',
                labelString:'Match',
                fontSize:15
            }
        }],
        yAxes:[{
            display:true,
            ticks:{
                fontColor:'white',
            },
            gridLines:{
                display:true,
                color:'white',
                lineWidth:[1,0,0,0,0,0,0,0,0,0,0,0,0],
            },
            scaleLabel:{
                display:true,
                fontColor:'rgb(255, 255, 255)',
                labelString:'Rating',
                fontSize:15
            }
        }]
    },
    fontColor:'rgb(255, 255, 255)',
    
}
//console.log(options.scales.yAxes[0].gridLines)
    return(
        <div style={{width:'100%'}}>
            <div style={{width:'100%', height:'700px'}}>
                <Line style={{border:'solid pink 1px'}} data={data} options= {options}/>
            </div>
        </div>
    )
}

export default BarChart