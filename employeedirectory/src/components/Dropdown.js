import React from "react";

const styles = {
   filter: {
       float: "right"
   },
   sort: {
       float: "left"
   },
   bothdropdowns: {
       margin: 20
   }
  };

function Dropdown() {
  return (
    <div className="both-dropdowns" style={styles.bothdropdowns}>
        <div className="dropdown-one" style={styles.sort}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div> 

        <div className="dropdown-two" style={styles.filter}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p className="dropdown-item" href="#">Action</p>
                <p className="dropdown-item" href="#">Another action</p>
                <p className="dropdown-item" href="#">Something else here</p>
            </div>
        </div> 
    </div>
  );
}

export default Dropdown;