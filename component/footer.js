var footer = document.querySelector('#footer')
var Footer = React.createClass({
	getInitialState : function(){
		return {
			opacity : 1
		}
	},
	componentDidMount : function(){
		setInterval(function(){
			var opa = this.state.opacity;
			opa -= 0.05;
			if(opa < 0.1){
				opa = 1;
			}
			this.setState({
				opacity : opa
			})
		}.bind(this), 100)
	},
	render : function(){
		console.log('reRender')
		var value = this.state.value;
		
		return (
		<nav style={{opacity : this.state.opacity}}>
			Hello {this.props.name}
		</nav>
		)
	}
})

ReactDOM.render(<Footer name="iny"/>, footer)