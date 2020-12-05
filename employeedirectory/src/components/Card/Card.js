import React from "react";

const styles = {
    card: {
        margin: 15
    },
    img: {
        height: 100,
    }
}

function Card(props) {
  return (
    <div className="container">
        <div className="card" style={styles.card}>
            <div className="card-body">
                <div class="row">
                    <div class="col">
                        <img alt={props.name} src={props.image} style={styles.img}/>
                    </div>
                    <div class="col">
                        {props.name}
                    </div>
                    <div class="col">
                        {props.title}
                    </div>
                    <div class="col">
                        {props.email}
                    </div>
                </div>
            </div>
        </div>
        <span onClick={() => props.removeEmployee(props.id)} className="remove">
        {/* 𝘅 */}
      </span>
    </div>
  );
}

export default Card;