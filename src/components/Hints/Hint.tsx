import React from "react";
import "../../css/hints.css";
import { FiArrowRight } from "react-icons/fi";

interface Hint {
  image: string;
  alt: string;

  name: string;
  description: string;
}

interface HintProps {
  hint: Hint;
}

const Hint: React.FC<HintProps> = ({ hint }) => {
  return (
    <div className="hints">
      <div>
        <div className="hintImg">
          <img src={hint.image} alt={hint.alt} />
        </div>

        <div className="hintName">{hint.name}</div>
        <div className="hintDescription">{hint.description}</div>
        <div>
          <div className="moreHints">
            <p>Read More</p>
            <FiArrowRight className="expandHint" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hint;
