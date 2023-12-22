import React, { useState } from "react";

const Searchform = ({ searchText }) => {
    const [text, setText] = useState("");
    const [showValidTextModal, setShowValidTextModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "" || !text.trim()) {
            setShowValidTextModal(true);
            return;
        }
        searchText(text);
    };

    const onChangevalue = (e) => {
        e.preventDefault();
        setText(e.target.value);
        searchText(e.target.value);
        if (e.target.value === "") {
            setText("Loki");
            searchText("Loki");
        }
    };

    return (
        <div>
            <br />
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="Search for a book ....."
                    onChange={onChangevalue}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.6rem",
                        borderRadius: "10px",
                        border: "1.4px solid black",
                        width: "300px",
                    }}
                />
                <button
                    style={{
                        marginLeft: "1rem",
                        padding: "0.2rem",
                        borderRadius: "10px",
                        width: "100px",
                        border: "1.3px solid black",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                    }}
                    type="submit"
                >
                    Search
                </button>
            </form>
            <div
                id="popup1"
                class={showValidTextModal ? "overlay modal-active" : "overlay"}
            >
                <div class="popup">
                    <div class="close" onClick={() => setShowValidTextModal(false)}>
                        &times;
                    </div>
                    <h3 class="content" style={{margin: "auto"}}>Enter a valid book name</h3>
                </div>
            </div>
        </div>
    );
};

export default Searchform;