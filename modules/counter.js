var Counter = React.createClass({
    
    
    getInitialState: function() {
        return {
            counter: 10
        };
    },

    increment: function(){
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function(){
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
                
                React.createElement('button', {onClick: this.increment}, 'Like '),
                React.createElement('button', {onClick: this.decrement}, 'No Like '),
                React.createElement('div', {}, 'result ' + this.state.counter)
                
        );
    },

    
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('appOne'));