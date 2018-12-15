class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container">
                <Calculator />
            </div>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="calculator">
                <div id="display">
                    Result
                </div>
                <div id="buttons">
                    <div id="clear" className="button">AC</div>
                    <div id="equals" className="button">=</div>
                    <div id="zero" className="button">0</div>
                    <div id="one" className="button">1</div>
                    <div id="two" className="button">2</div>
                    <div id="three" className="button">3</div>
                    <div id="four" className="button">4</div>
                    <div id="five" className="button">5</div>
                    <div id="six" className="button">6</div>
                    <div id="seven" className="button">7</div>
                    <div id="eight" className="button">8</div>
                    <div id="nine" className="button">9</div>
                    <div id="add" className="button operation">+</div>
                    <div id="subtract" className="button operation">-</div>
                    <div id="multiply" className="button operation">*</div>
                    <div id="divide" className="button operation">/</div>
                    <div id="decimal" className="button">.</div>
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));