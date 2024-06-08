import React from "react";
import "./TemplateCard.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function TemplateCard(props) {
  return (
    <div className="template-card-container">
      <div className="template-title">
        <p className="template-name">{props.name}</p>
        <MoreHorizIcon className="template-extra-btn" />
      </div>
      <p className="template-exercises">{props.workouts}</p>
      <div className="template-last-used">
        <AccessTimeIcon className="template-last-used-icon" />
        <p className="template-last-used-date">{props.lastUsed}</p>
      </div>
    </div>
  );
}

export default TemplateCard;
