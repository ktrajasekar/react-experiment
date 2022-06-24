import React from "react";
import { connect } from 'react-redux';


function About(props) {
    console.log(props);

    return (<div>
        About
        <div>
            {props.posts.map((item) => {
                return <li>{item.text} {item.id}</li>
            })}
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(About);