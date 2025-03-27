//UserDashboard.js
import react from "react";
import axios from "axios";
// import rd from "react-dom";





class UD extends react.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonnum:0,
            persons: {"email":"","first_name":" ","last_name":" ","avatar":"https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"},
            id:0,
            img:"https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
            email: "",
            first_name: "",
            last_name: "",

        }
    }
    // componentDidMount() {
    //     axios.get(`https://reqres.in/api/users/`)
    //       .then(res => {
    //         const persons = res.data.data;
    //         console.log(persons,"line 29")
    //         this.setState({ persons: persons });
    //         console.log(this.state.persons,"line 31")
            // this.setState({email: this.state.persons.email})
            // this.setState({ persons: persons, email: this.state.persons.email, img: this.state.persons.avatar, first_name: this.state.persons.first_name, last_name: this.state.persons.last_name});
        //   })
    //   }
    // componentDidUpdate(prevProps,prevState){
    //     // console.log("line 36",this.state.id,prevState.id)
    //     if (this.state.id!==prevState.id)
    //     {
    //     try{axios.get(`https://reqres.in/api/users/`)
    //     .then(res => {
    //         const persons= res.data.data;
    //       this.setState({ persons:persons, email: this.state.persons.email, img: this.state.persons.avatar, first_name: this.state.persons.first_name, last_name: this.state.persons.last_name})
    //       console.log(this.state.persons)
    //     })}
    //     catch(error){
    //         return alert("Failed to Fetch Data")
    //     } }}


        // HandleUpdate= (e) => {

        //     // const persons= prev
        //     // this.setState({id:e})
        //     console.log("line 55")
        //     this.setState({id:e})
            
        // }
        //  HandleUpdate= (e) => {
            
        //     // const persons= prev
        //     // this.setState({email:this.state.persons.email})
        //     console.log("line 55")
        //     // this.setState({id:e})
        //     this.setState({id: e.target.value})

            
        // }

        ApiHandler=async (e) => {
                try{
                axios.get(`https://reqres.in/api/users/${e}`)
                  .then(res => {
                    const persons = res.data.data;
                    console.log(persons.id,persons.email,"line 29")
                    this.setState({ persons: persons });
                    // this.setState({ persons: persons, email: persons.email, img: this.state.persons.avatar, first_name: this.state.persons.first_name, last_name: this.state.persons.last_name});
                    console.log(this.state.persons,"line 31")
                    // this.setState({email: this.state.persons.email})
                    // this.setState({ persons: persons, email: this.state.persons.email, img: this.state.persons.avatar, first_name: this.state.persons.first_name, last_name: this.state.persons.last_name});
                  }).catch(function(error){
                  return alert("failed to fetch data!")}
                  )}
                  catch(error){

                    console.log("error::", error)
                    return alert("Failed to fetch data!")
                  }
              }


    
    render() {
        return (

            <div>
                <button onClick={()=> this.ApiHandler(1)}>1 </button>
                <button onClick={()=> this.ApiHandler(2)}>2</button>
                <button onClick={()=> this.ApiHandler(3)}>3</button>
                <button onClick={()=> this.ApiHandler(100)}>100</button>
                <ul>
                    <li>Email: {this.state.persons.email}</li>
                    <li>Name: {this.state.persons.first_name+" "+this.state.persons.last_name} </li>
                </ul>
                <img src={this.state.persons.avatar} alt="not available"></img>
                    
                {/* {this.state.persons.map(person => <p key={person.id}>{person.email}</p>) } */}
            </div >
           
        )
    }
}

export default UD;





