import './App.css';
// var React = require('react-dom');
// var React2 = require('react');
// import './Navbar'
import{Router} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
     
    <div className="App">
    <Navbar />
    <h1>Request Form</h1>
    <form>
      <label>
        Request No.:
        <input type="text" name="requestNo" required />
      </label><br/>

      <label>
        Owner SC:
        <input type="text" name="ownerSC" required />
      </label><br/>

      <label>
        Requester:
        <input type="text" name="requester" required />
      </label><br/>

      <label>
        Distributor:
        <input type="text" name="distributor" required />
      </label><br/>

      <label>
        End Customer:
        <input type="text" name="endCustomer" required />
      </label><br/>

      <label>
        Contact:
        <input type="text" name="contact" required />
      </label><br/>

      <label>
        Request Date:
        <input type="date" name="requestDate" required />
      </label><br/>

      <label>
        Return Date:
        <input type="date" name="returnDate" required />
      </label><br/>

      <label>
        Status:
        <input type="text" name="status" required />
      </label><br/>

      <label>
        Close Date:
        <input type="date" name="closeDate" required />
      </label><br/>

      <label>
        Material/Serial:
        <input type="text" name="materialSerial" required />
      </label><br/>

      <label>
        Location Address:
        <input type="text" name="locationAddress" required />
      </label><br/>

      <label>
        Remarks:
        <input type="text" name="remarks" />
      </label><br/>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default App;
