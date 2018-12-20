let num = '';
let result = '';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            current: '', 
            display: '0',
        }
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.clear = this.clear.bind(this);
    }
    
    handleNumber(ev) {
        num += ev.target.value;
        this.setState({
            display: num,
        });   
        
        if (this.state.display === '0' && ev.target.value === '0') {
            this.setState({
                display: '0',
            });
            num = '';
        } 
//        if (this.state.display.includes('.') && ev.target.value === '.') {
//            console.log('double');
//        }
    }
    
    handleOperation(ev) {
        if (ev.target.value === '=') {
            result = eval(this.state.display);
            console.log(result);
            this.setState({
                display: result,
            })
        }         
    }
        
    clear() {
        this.setState({
            display: '0',
            total: '',
        });
        num = '';
    }
      
    render() {
        return (
            <div id="container">
            <div id="calculator">
                <div id="display">
                    {this.state.display}
                </div>
                <div id="buttons">
                    <div id="clear" className="button" onClick={this.clear}>DEL</div>
                    <input id="equals" className="button" onClick={this.handleOperation} value="=" />
                    <input id="zero" className="button" onClick={this.handleNumber} value="0" />
                    <input name="1" id="one" className="button" onClick={this.handleNumber} value="1" />
                    <input id="two" className="button" onClick={this.handleNumber} value="2" />
                    <input id="three" className="button" onClick={this.handleNumber} value="3" />
                    <input id="four" className="button" onClick={this.handleNumber} value="4" />
                    <input id="five" className="button" onClick={this.handleNumber} value="5" />
                    <input id="six" className="button" onClick={this.handleNumber} value="6" />
                    <input id="seven" className="button" onClick={this.handleNumber} value="7" />
                    <input id="eight" className="button" onClick={this.handleNumber} value="8" />
                    <input id="nine" className="button" onClick={this.handleNumber} value="9" />
                    <input id="add" className="button operation" value="+" onClick={this.handleNumber} />
                    <input id="subtract" className="button operation" value="-" onClick={this.handleNumber} />
                    <input id="multiply" className="button operation" value="*" onClick={this.handleNumber}/>
                    <input id="divide" className="button operation" value="/" onClick={this.handleNumber}/>
                    <input id="decimal" className="button" value="." onClick={this.handleNumber}/>
                </div>
                
            </div>
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));