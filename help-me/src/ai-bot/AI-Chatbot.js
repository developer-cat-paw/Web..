import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './AI-Chatbot.css';

function Chat() {
    const [inputValue, setInputValue] = useState("");
    const [chatContent, setChatContent] = useState([]);

    const sendMessage = () => {
        setChatContent([...chatContent, { mine: true, text: inputValue }]);

        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);

        openai
            .createCompletion({
                model: "text-davinci-002",
                prompt: inputValue,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
            .then((result) => {
                setChatContent([...chatContent, { mine: false, text: result.data.choices[0].text }]);
            });
    };

    return (
        <div>
            <div className="chat-content">
                {chatContent.map((content, index) => (
                    <div>
                        <div className="line" key={index}>
                            <span className={`chats${content.mine ? "mine" : ""}`}>
                                {content.text}
                            </span>
                        </div>
                        <br></br>
                    </div>
                ))}
            </div>
            <div className="boxes">
                <input
                    className="chat-box"
                    id="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {/* <button className="send" id="send" onClick={sendMessage}>
                전송
            </button> */}
                <button className="button-23" id="send" onClick={sendMessage}>Button 23</button>
            </div>
        </div>
    )
}

export default Chat;
