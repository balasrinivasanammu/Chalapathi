
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <p><h4>Take care your health</h4></p>  
                              <button onClick={this.togglemyBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;   