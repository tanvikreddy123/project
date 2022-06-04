import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
const TableData=[
  {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
  {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
  {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
  {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
  {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
]



const Home = () => {
  return (
    <div>
     <img src={process.env.PUBLIC_URL+"image.jpeg"} />
     <div id='text1Id'>
       <center>
       <h6 id='h6Id'>Welcome to Food Waste Management System</h6><br></br>
      <p id='p1Id'>Food Waste refers to the decrease in the quantity or quality of food resulting from decisions and actions by retailers,food service providers and consumers.Food is wasted in many ways:<br></br>
      <br></br>
      <ul>
        <li>Fresh produce that deviates from what is considered optimal,for example in terms of shape,color and size,is often removed from the supply chain during sorting operations.</li><br></br>
        <li>Foods that are close to,at or beyond the expiry date are often discarded by retailers and consumers.</li><br></br>
        <li>Large quantities of wholesome edible food are often unused or left-over and discarded from household kitchens and eating establishments.</li>
      </ul>
        
      
     </p>
     </center>
     </div>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        students: [
           { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
           { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
           { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
           { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.students.map((student, index) => {
        const { id, name, age, email } = student //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

const Contact = () => {
  return (
    <div class="wrapper">
    <form action="" method="POST">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
      </div>
      <div class="form-group">
      <label for="phone">Email Address</label>
      <input type="phone" name="phone" id="phone" placeholder="Phone" required />

      </div>
      <div class="form-group">
        <label for="email">Phone</label>
        <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit"><i class="far fa-paper-plane"></i>Send</button>
      </div>
    </form>
  </div>
  );
};
const Donor = () => {
  return (
    <div>
      <h1>Add page</h1>
    </div>
  );
};
const Admin = () => {
  return (
    <div>
      <h1>Add page</h1>
    </div>
  );
};
function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Food Forward
           
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                HomE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/add"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Available Food List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/get"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/add"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Donor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/get"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
        Admin
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
function App() {
  
  return (
    
     
       <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/add" component={Table} />
            <Route path="/get" component={Contact} />
            <Route path="/get" component={Donor} />
            <Route path="/get" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}



export default App;