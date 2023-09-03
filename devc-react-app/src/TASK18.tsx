const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.qunatity}</h1>
}

Items.prototype = {quantity: PropTypes.number.isRequired}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <Items />
    }
}