class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            currentNum: '',
            sign: '',
            result: '0',
            first: '',
            second: '',
            lastPressed: '',
            decimal: false,
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
        
        if (ev.target.name === 'operator') {
            this.state.first = this.state.currentNum.slice(0, -2);
            
        }
        
        if (ev.target.value === '=') {
            let expression = this.state.currentNum.slice(0, -1);
    
           this.setState({
               display: eval(expression),
               currentNum: eval(expression),
           })    
            
            this.state.second = this.state.currentNum;
    }
        
        console.log('second is ' + this.state.second);
        
        if (this.state.display === '0' && ev.target.value === '0') {
            this.setState({
                display: '0',
            });
            this.state.currentNum = '';
        
        }
       const decimal =  document.getElementById('decimal');    
        if (this.state.lastPressed === '.') {       
            if (ev.target.value === '.') {
                console.log('double');
            }
        }        
}
    
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
                    <input name="1" id="one" className="button" onClick={this.handleNumber} value="1" name="digit" />
                    <input id="two" className="button" onClick={this.handleNumber} value="2" name="digit" />
                    <input id="three" className="button" onClick={this.handleNumber} value="3" name="digit" />
                    <input id="four" className="button" onClick={this.handleNumber} value="4" name="digit" />
                    <input id="five" className="button" onClick={this.handleNumber} value="5" name="digit" />
                    <input id="six" className="button" onClick={this.handleNumber} value="6" name="digit" />
                    <input id="seven" className="button" onClick={this.handleNumber} value="7" name="digit" />
                    <input id="eight" className="button" onClick={this.handleNumber} value="8" name="digit" />
                    <input id="nine" className="button" onClick={this.handleNumber} value="9" name="digit" />
                    <input id="add" className="button operation" value=" + " name="operator" onClick={this.handleNumber} />
                    <input id="subtract" className="button operation" value=" - " name="operator" onClick={this.handleNumber} />
                    <input id="multiply" className="button operation" value=" * " name="operator" onClick={this.handleNumber}/>
                    <input id="divide" className="button operation" value=" / " name="operator" onClick={this.handleNumber}/>
                    <input id="decimal" className="button" name="decimal" value="." onClick={this.handleNumber}  />
                </div>
                
            </div>
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));