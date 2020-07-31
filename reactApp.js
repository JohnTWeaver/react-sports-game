class Team extends React.Component {
    //needs name and a path for a logo
    //display the shots taken
    //display the score
    //need a shoot button
    //shots taken should always increase sometimes the score  should  go up using math.random 
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            shots: 0,
        }
        this.shotSound = new Audio('./assets/audio/dribble.mp3')
        this.scoreSound = new Audio('./assets/audio/swish.mp3')
    }

    shootButton = (event) => {
        let score = this.state.score
        this.shotSound.play()

        this.setState((state, props) => (
            {
                shots: state.shots + 1
            }

        ))
        if (Math.random() < .5) {
            this.setState((state, props) => (
                {
                    score: state.score + 1,
                }

            ))
            setTimeout(() => {
                this.scoreSound.play()
            }, 150);

        }
    }

    render() {
        let shotPercentageDiv
        if (this.state.shots) {
            const shotPercentage = (Math.round((this.state.score / this.state.shots) * 100))
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %:{shotPercentage}</strong>
                </div>
            )
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <button onClick={this.shootButton}>Shoot</button>
                <p> Shot Counter:{this.state.shots} Score:{this.state.score}</p>
                {shotPercentageDiv}
            </div>

        )
    }
}

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team 
                    name='Rockyvile Rocks'
                    logo='./assets/rocks.jpg' />
                <div className="versus">
                    <h1>VS</h1>
                </div>
                <Team 
                    name='Ohio Oasis'
                    logo='./assets/oasis.jpg'
                />
            </div>
        </div>
    )
}


function App(props) {
    // <h2> Team : {this.state.name}</h2>
    return (
        <div className="App">
           <Game venue="Rocky Moutains"/>
        </div>
    )
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)