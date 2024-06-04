import React, { useState } from "react";
import "./Templates.css";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

function Templates() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleFolder = () => setCollapsed(true);

  return (
    <div className="templates">
      <div className="templates-container">
        <div className="templates-title-and-create">
          <h1 className="templates-title">Templates</h1>
          <div className="add-template-buttons">
            <button className="add-template-button">
              <AddCircleIcon fontSize="medium" />
              <p>Template</p>
            </button>
            <button className="add-template-button">
              <FolderCopyIcon />
            </button>
          </div>
        </div>

        <div onClick={toggleFolder}>
          {!collapsed && (
            <>
              <p>Folders</p>
              <div>Folder 1</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Templates;
