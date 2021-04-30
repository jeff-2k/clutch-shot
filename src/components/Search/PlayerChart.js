import React from 'react'
import Chart from 'chart.js/auto'


class PlayerChart extends React.Component{
    state = {
        playerStats: [],
        label: [],
        data: [],
        chart: '',
    }

    componentDidUpdate = (prevProps,prevState) => {
        if (prevProps.state.playerStats.player_id !== this.props.state.playerStats.player_id){
        let infos = ['PTS', 'FGM', 'FG3M', 'FTM', 'OREB', 'DREB','AST','STL', 'BLK', 'TURNOVER'];
        console.log(this.props.state)
        let entries = Object.entries(this.props.state.playerStats).filter((entry) => {
            return infos.indexOf(entry[0].toUpperCase()) !== -1
            // console.log(entry)
        })

        console.log(entries)

        let label = [];
        let data = [];
        for(let [singleLabel, singleData] of entries){
            label.push(singleLabel)
            data.push(singleData)
        }
        
        // console.log(label,data)
        this.setState({ label: [...label], data: [...data] })
        if(this.state.chart !== ''){
        this.state.chart.destroy()
        }
        // console.log(Object.keys(this.props.state.playerStats))
    }

    if(prevState.label !== this.state.label){
        this.renderChart()
    }
    }

    renderChart = () => {
        // console.log(this.state)
        const ctx = document.getElementById('chart').getContext('2d')
        const chart  = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: this.state.label,
                // ['PTS', 'FGM', '3PM', 'FTM', 'OREB', 'DREB','AST','STL', 'BLK', 'TOV'],
                datasets: [{
                    label: '# of Votes',
                    data: this.state.data,
                    backgroundColor: [
                        'rgba(38, 176, 0, 0.2)', //FIELD GOALS MADE
                        'rgba(7, 130, 0, 0.2)', //3 POINTS MADE
                        'rgba(140, 255, 138, 0.2)', //FREETHROW MADES
                        'rgba(0, 55, 133, 0.2)', //OFFESIVE REBOUND
                        'rgba(0, 78, 186, 0.2)', //DEFENSIVE REBOUND
                        'rgba(0, 170, 255, 0.2)', //ASSIST
                        'rgba(214, 207, 0, 0.2)', //STEAL
                        'rgba(113, 12, 207, 0.2)', //BLOCK
                        'rgba(255, 0, 0, 0.2)', //TURNOVERS
                        'rgba(101, 255, 54, 0.2)', //POINTS
                    ],
                    borderColor: [
                        'rgba(38, 176, 0, 1)', //FIELD GOALS MADE
                        'rgba(7, 130, 0, 1)', //3 POINTS MADE
                        'rgba(140, 255, 138, 1)', //FREETHROW MADES
                        'rgba(0, 55, 133, 1)', //OFFESIVE REBOUND
                        'rgba(0, 78, 186, 1)', //DEFENSIVE REBOUND
                        'rgba(0, 170, 255, 1)', //ASSIST
                        'rgba(214, 207, 0, 1)', //STEAL
                        'rgba(113, 12, 207, 1)', //BLOCK
                        'rgba(255, 0, 0, 1)', //TURNOVERS
                        'rgba(101, 255, 54, 1)', //POINTS
                        
                    ],
                    borderWidth: 1,
                    hoverOffset: 20
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false
                    }
                }
            }
        });
        this.setState({chart})
    }
    render(){
        return(
        <div className="container-canvas mt-4">
            <canvas id='chart' width='700%' height='auto'></canvas>
        </div>
        )
    }
}

export default PlayerChart