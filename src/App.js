import React,{Component} from 'react';


class App extends Component{
     constructor(props){
       super(props)
       this.state ={
         item:[],
         loading:false
       }
        this.timer = -1;

    this.page = 0
     }
     componentDidMount(){
       fetch("https://randomuser.me/api/?results=5")
       .then((response) => response.json())
			.then((response) =>{
        this.setState({
          items:response.results,
          loading:true
        })

      })
     
     }
     

  render(){
    var {items,loading} =this.state
    if(!loading){
      return(
        <div>Loading......</div>
      )
    }
    else{
return(
  
 <div className="ucontainer">
 <div>
            <h3>Meet The Team</h3>
         </div>
         <div className="results">
         </div>
 {items.map(item =>(
 

 <div className="card-wrapper">
        <div className="card">
            <div className="card-front">

                <div className="left">
                	<div className="person right-content">
                   <img src={item.picture.medium} alt={item.name.first} className="img-rounded" />
     
                         <div>
                            <h4>{item.name.title}  {item.name.first} {item.name.last}</h4>
                           
                        </div>
                    </div>
                 </div>
                <div className="right">

                 <div className="cc-rockmenu">
                     
                      <div className="rolling">
                        <figure className="rolling_icon"><i class="fa fa-phone"></i></figure>
                        <span className="phone">{item.phone}</span>
                       
                      </div>
                      <div className="rolling">
                        <figure className="rolling_icon"><i class="fa fa-envelope"></i></figure>
                        <span className="email">{item.email}</span>
                        
                      </div>
                      
                       <div className="rolling">
                        <figure className="rolling_icon"><i class="fa fa-location-arrow"></i></figure>
                        <span>{item.location.street.number}, {item.location.street.name},</span>
                        <span> {item.location.city}</span>
                      </div>
                    </div>
            	</div>
             </div>
            </div>
    </div>
   
   
    
  
 ))}
 </div>
  
    )
    }

  }
  
  }
    
export default App;
