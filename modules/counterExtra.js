var CounterExtras = React.createClass({
    
    
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

    componentWillMount() {
      alert('Component WILL MOUNT!');
   },

   componentDidMount() {
      console.log('Component DID MOUNT!');
   },

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!');
   },

   shouldComponentUpdate(newProps, newState) {
      return true;

   },

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   },

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!');
   },

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!');
   },


    render: function() {
        return React.createElement('div', {},
                
                React.createElement('button', {onClick: this.increment}, 'Like '),
                React.createElement('button', {onClick: this.decrement}, 'No Like '),
                React.createElement('div', {}, 'result ' + this.state.counter)
                
        );
    },
   
});

var element = React.createElement(CounterExtras);
ReactDOM.render(element, document.getElementById('appTwo'));