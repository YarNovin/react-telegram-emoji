import React from "react"; 
import "./json/emoji_data.json";

const ReactTelegramEmojiProps = (props) => { 
    // allowed width parameter : px; 
    return props;
} 
class ReactTelegramEmoji extends React.Component{ 
    render() { 
        return ( 
            <img src={this.props.src} width={this.props.width} />
        )
    }
}

export default ReactTelegramEmoji;