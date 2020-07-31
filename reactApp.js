class Team extends React.Component {
    //needs  name  and   a path for a logo
    //display  the shots taken
    //display  the score
    //need a shoot button
    //shots taken should always increase sometimes the score  should  go  up using math.random 
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            shots: 0,
            // name: 'temp',
            // logo: 'temp'
        }
        this.shotSound = new Audio('./assets/audio/shot.mp3')
        this.scoreSound= new Audio('./asset/audio/make.mp3')
    }

    shootButton = (event) => {
        this.setState((state, props) => (
            {
                shots: state.shots + 1
            }

        ))
        if(Math.random() <.5){
            this.setState((state, props) => (
            {
                score: state.score + 1
            }

        ))
        }
    }

    render(){
    return(
        <div className ="App">
            <h2>{this.props.name}</h2>
            <div className="identity">
                <img src={this.props.logo} alt={this.props.name}/>
            </div>
            <button onClick={this.shootButton}>Shoot</button>
            <p> Shot Counter:{this.state.shots} Score:{this.state.score}</p>
        </div>

    )
    }
}


function App(props) {


    // <h2> Team : {this.state.name}</h2>
    return (
        <div>
            <Team name='Rockyvile Rocks'
             logo ='./assets/rocks.jpg'/>
            <div className= "verses">
                <h1>VS</h1>
            </div>
            <Team name='Ohio Oasis'
            logo ='./assets/oasis.jpg'
            />
        </div>
    )


}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)