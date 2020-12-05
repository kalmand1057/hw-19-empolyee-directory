import React from "react";

const styles = {
    card: {
        margin: 20,
        float: "left"
    }
   };

function Card() {
  return (
    <div className="container" style={styles.card}>
        <div className="card">
            <div className="card-body">
                <div class="row">
                    <div class="col">
                    image
                    </div>
                    <div class="col">
                    name
                    </div>
                    <div class="col">
                    title
                    </div>
                    <div class="col">
                    email
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;