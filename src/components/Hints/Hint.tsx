import React, { useState } from "react";
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
  const [readAll, setReadAll] = useState<boolean>(false);
  return (
    <div className="hints">
      <div>
        <div className="hintImg">
          <img src={hint.image} alt={hint.alt} />
        </div>

        <div className="hintName">{hint.name}</div>
        <div className={readAll ? "hintDescription1" : "hintDescription"}>
          {hint.description}
        </div>
        <div>
          <div className="moreHints" onClick={() => setReadAll(!readAll)}>
            <p>Read More</p>
            <FiArrowRight className="expandHint" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hint;
