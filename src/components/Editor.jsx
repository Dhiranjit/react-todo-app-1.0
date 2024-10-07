import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor({ tempNoteText, setTempNoteText }) {
  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <section className="pane editor" data-color-mode="light">
      <div className="tab-buttons">
        <button
          onClick={() => setSelectedTab("write")}
          className={selectedTab === "write" ? "active" : ""}
        >
          Write
        </button>
        <button
          onClick={() => setSelectedTab("preview")}
          className={selectedTab === "preview" ? "active" : ""}
        >
          Preview
        </button>
      </div>
      {selectedTab === "write" ? (
        <MDEditor
          value={tempNoteText}
          onChange={setTempNoteText}
          preview="edit"
          height="80vh"
          style={{ height: "calc(100% - 40px)" }}
        />
      ) : (
        <MDEditor.Markdown
          source={tempNoteText}
          style={{
            height: "calc(80vh - 40px)",
            overflow: "auto",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
          }}
        />
      )}
    </section>
  );
}
