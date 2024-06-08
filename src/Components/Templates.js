import React, { useState } from "react";
import "./Templates.css";
import TemplateCard from "./TemplateCard";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Templates() {
  const [collapsed, setCollapsed] = useState({});

  const toggleFolder = (folderId) => {
    setCollapsed((prevCollapsed) => ({
      ...prevCollapsed,
      [folderId]: !prevCollapsed[folderId],
    }));
  };

  const foldersData = [
    {
      id: 1,
      name: "Folder 1",
      templates: [
        {
          id: 1,
          title: "Card 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "5 days ago",
        },
        {
          id: 2,
          title: "Card 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "6 days ago",
        },
      ],
    },
    {
      id: 2,
      name: "Folder 2",
      templates: [
        {
          id: 3,
          title: "Card 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "7 days ago",
        },
        {
          id: 4,
          title: "Card 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "8 days ago",
        },
        {
          id: 5,
          title: "Card 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "9 days ago",
        },
      ],
    },
    {
      id: 3,
      name: "Folder 3",
      templates: [
        {
          id: 6,
          title: "Card 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "10 days ago",
        },
        {
          id: 7,
          title: "Card 7",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "11 days ago",
        },
        {
          id: 8,
          title: "Card 8",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et cursus tristique. Pellentesque suscipit, eros tempor vehicula dapibus, sem leo vestibulum nulla, hendrerit pharetra velit ipsum nec est. Curabitur luctus, neque nec venenatis tincidunt, libero turpis dapibus tortor, at suscipit tortor augue eu eros. Suspendisse porttitor, purus at efficitur laoreet, elit neque tincidunt lectus, sed bibendum massa ligula eget augue. Fusce ut tincidunt massa. Nam non velit nisl. Proin placerat leo ut dictum dapibus. Pellentesque elementum molestie lectus, id maximus diam tincidunt elementum.",
          lastUsed: "12 days ago",
        },
      ],
    },
  ];

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

        <div className="template-folders-and-cards">
          {foldersData.map((folder) => (
            <div key={folder.id}>
              <p
                className="template-folder-name"
                onClick={() => toggleFolder(folder.id)}
              >
                {folder.name}
                {!collapsed[folder.id] && (
                  <ExpandLessIcon sx={{ fontSize: 30 }} />
                )}
                {collapsed[folder.id] && (
                  <ExpandMoreIcon fsx={{ fontSize: 30 }} />
                )}
              </p>
              {!collapsed[folder.id] && (
                <div className="template-cards">
                  {folder.templates.map((card) => (
                    <TemplateCard
                      key={card.id}
                      name={card.title}
                      workouts={card.description}
                      lastUsed={card.lastUsed}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;
