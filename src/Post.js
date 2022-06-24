import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './redux/actions';

class NewPostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }

    handleOnChange = event => {
        this.setState({ text: event.target.value })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addPost({ text: this.state.text, id: 41 })
    }

    render() {
        return (
            <div>
                <h2>New Post Form:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <textarea
                        placeholder="Post Content..."
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    >
                    </textarea>
                    <input type="submit" />
                </form>
                <div>
                    {this.props.posts.map((item) => {
                        return <li>{item.text} {item.id}</li>
                    })}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: post => dispatch(addPost(post)),
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm)