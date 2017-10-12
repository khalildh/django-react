// alert('hello');
var bands = [
  {name: "Bayside", image: "http://reactkungfu.com/assets/images/rbe-cover.png"},
  {name: "Bayside", image: "http://reactkungfu.com/assets/images/rbe-cover.png"},
  {name: "Bayside", image: "http://reactkungfu.com/assets/images/rbe-cover.png"}
]


class BandComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customText: "",
      val: 0,
    }
    var that = this;
    that.customClickFunction = function() {
      var val = that.state.val;
      val += 1;
      that.setState({customText: "You clicked the button!", val: val});
    }
  }


  render() {
    var style = {
      fontSize: "18px",
      marginRight: "20px"
    };
    return (
      <div style={style}>
          <h1>{this.state.customText}</h1>
          <button onClick={this.customClickFunction}>Click Me!!</button>
          {this.props.bands.map(function(band){
            return (
              <Band name={band.name} image={band.image}/>
            )
          })}
      </div>
    );
  }
}

class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    var that = this;
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image}/>
        <p>{this.props.bio}</p>
        <h2>{this.props.date_added}</h2>
      </div>
    )
  }
}
class AllBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: "1",
                  name: "",
                  image: "",
                  bio: "",
                  date_added: ""
                };
    var that = this;
    that.updateInputValue = function(evt, callback) {
      that.setState({input: evt.target.value});
      var request = 'http://localhost:8000/band/api/'+ this.state.input + '/'
      $.get(request, function(response){
        that.setState({name: response.name,
                       image: response.image,
                       bio: response.bio,
                       date_added: response.date_added,});
      });
    }

    that.updateState = function() {


    }
    that.updateInputValue({target: {vale: 1}});
  }

  render() {

    return (
      <div>
        <input type="number" value={this.state.input} onChange={evt => this.updateInputValue(evt)}/>
        <h1>{this.state.name}</h1>
        <img src={this.state.image}/>
        <p>{this.state.bio}</p>
        <h2>{this.state.date_added}</h2>
      </div>
    )
  }
}

// ReactDOM.render(
//   <BandComponent bands={bands} />,
//   document.getElementById('content')
// )
// var url = window.location.href;
// url = url.slice(0, -1);
// console.log(url);
// var id = url.substring(url.lastIndexOf('/') + 1);
// console.log(id);
//
// var request = 'http://localhost:8000/band/api/'+ id + '/'
// $.get(request,function(response){
//   console.log(response);
//   ReactDOM.render(
//     <Band name={response.name} image={response.image} bio={response.bio} date_added={response.date_added} />,
//     document.getElementById('band')
//   )
// });
// $.get(request,function(response){
//   console.log(response);
//
// });

ReactDOM.render(
  <AllBand />,
  document.getElementById('allband')
)
