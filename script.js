let expression = '';
let digit = [];
let sign = [];
let second = '';
let displayArr = [];
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            currentNum: '',
            sign: [],
            result: '0',
            lastPressed: '',
            disable: true,
            first: '',
            second: ''
        }
    this.handleNumber = this.handleNumber.bind(this);
        
    this.clear = this.clear.bind(this);
    }
    
    handleNumber(ev) {   
        this.state.lastPressed = ev.target.value;
    
        this.state.currentNum += ev.target.value;
        this.setState({
            display: this.state.currentNum,
        })
        
         // first number
        
        if (ev.target.name === 'operator') {
            this.state.first = this.state.currentNum.slice(0, -1);
            
        }
        
        // second number
        if (ev.target.value === '=') {            
            const arr = [];
            arr.push(this.state.currentNum.slice(0, -1));
            const str = arr.toString();
            str.split(' ');
            
           digit = str.match(/\d+/g); 
            second = digit[1];
    }
               
        if (ev.target.value === '=') {
            expression = this.state.currentNum.slice(0, -1);
    
           this.setState({
               display: eval(expression),
               currentNum: eval(expression),
           })    
        }
        
        // decimal test
        let isFloat = /([\+\*\-\/]?([0-9]*[.])[0-9]+$)/g;
        if (isFloat.test(this.state.display) && ev.target.value === '.') {
            this.setState({
               disable: false,
                display: this.state.display,
                currentNum: this.state.display,
           })
        }
        if (this.state.lastPressed.match(/\./)) {
           this.setState({
               disable: false,
           })
            
        } else {
            this.setState({
                disable: true,
            })
        }
        
     //     multiple operators check
        let operatorRgx = /[\+\*\-\/$]/; displayArr.push(this.state.lastPressed);
        
        if (displayArr.length > 2 && displayArr[displayArr.length-2].match(operatorRgx) && ev.target.name === 'operator') {
            
            this.setState({
                display: this.state.display.slice(0, -1) + displayArr[displayArr.length-1] + this.state.second,
                currentNum: this.state.display.slice(0, -1) + displayArr[displayArr.length-1] + this.state.second
            })
        }
                
     // multiple 0 check           
        if (this.state.display === '0' && ev.target.value === '0') {
            this.setState({
                display: '0',
            });
            this.state.currentNum = '';
        
        }       
}
    // clear display
    clear() {
        this.setState({
            currentNum: '',
            display: '0',
        })
    }   

    render() {
        return (
            <div id="container">
            <div id="calculator">
                
                <div id="display">{this.state.display}
                   
                </div>
            
                <div id="buttons">
                    <div id="clear" className="button" onClick={this.clear}>DEL</div>
                    <input id="equals" className="button" onClick={this.handleNumber} value="=" name="calculate" />
                    <input id="zero" className="button" onClick={this.handleNumber} value="0" name="digit" />
                    <input id="seven" className="button" onClick={this.handleNumber} value="7" name="digit" />
                    <input id="eight" className="button" onClick={this.handleNumber} value="8" name="digit" />
                    <input id="nine" className="button" onClick={this.handleNumber} value="9" name="digit" />
                    <input id="four" className="button" onClick={this.handleNumber} value="4" name="digit" />
                    <input id="five" className="button" onClick={this.handleNumber} value="5" name="digit" />
                    <input id="six" className="button" onClick={this.handleNumber} value="6" name="digit" />
                    <input id="one" className="button" onClick={this.handleNumber} value="1" name="digit" />
                    <input id="two" className="button" onClick={this.handleNumber} value="2" name="digit" />
                    <input id="three" className="button" onClick={this.handleNumber} value="3" name="digit" />
                    <input id="add" className="button operation" value="+" name="operator" onClick={this.handleNumber} />
                    <input id="subtract" className="button operation" value="-" name="operator" onClick={this.handleNumber} />
                    <input id="multiply" className="button operation" value="*" name="operator" onClick={this.handleNumber}/>
                    <input id="divide" className="button operation" value="/" name="operator" onClick={this.handleNumber}/>
                    <input id="decimal" className="button" name="decimal" value="." onClick={this.handleNumber} disabled={!this.state.disable}/>
                </div>
                
            </div>
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));