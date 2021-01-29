/*
Root Component which shows the use the DropDown component
*/
import "./scss/App.scss";
import DropDown from "./Components/DropDown";
//importing Data from local json files
import content1 from "./Data/Content1.json";
import content2 from "./Data/Content2.json";

function App() {
  return (
    <>
      <div id="header">
        
        CODE BASE ASSESSMENT - RESUSABLE DROPDOWN COMPONENT
      
      </div>
      <div className="flex-container" id="flex-1">
        <DropDown
          name="Ingredients for Samosa"
          id="drp-dn-1"
          content={content1}
        />
        <div className="info-tile" id="info-tile-2">
          <ul>
            <li>Using Drop Down Component With First Set of Data</li>
            <li>Hover on it to see the Ingredients for Samosa</li>
          </ul>
        </div>
      </div>
      <div className="flex-container" id="flex-2">
        <DropDown
          name="Ingredients for Upma"
          id="drp-dn-2"
          content={content2}
        />
        <div className="info-tile" id="info-tile-2">
          <ul>
            <li>Using Drop Down Component With Second set of Data</li>
            <li>Hover on it to see the Ingredients for Upma</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
