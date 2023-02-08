import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

function Loading() {
    return (
        <div class="contentWrap">
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <PulseLoader
                    color="#6a53da59"
                    speedMultiplier={1}
                />
            </div>
        </div>
    );
}

export default Loading;