import { css } from "@emotion/core";
import React, { useState } from "react";
import { Icon, Rate } from "rsuite";
import { SkillDef } from "../../game-model/types";
import Prompt from "./Prompt";

const classes = {
  cell: {
    rating: css({
      paddingLeft: "2em",
    }),
  },
};

const renderCharacter = (value, index) => {
  let icon: "square" | "close" = "square";
  let className = "rs-rate-red";
  if (index === 0) {
    className = "rs-rate-character-after";
    icon = "close";
  } else {
    switch (value) {
      case 3:
        className = "rs-rate-orange";
        break;
      case 4:
        className = "rs-rate-yellow";
        break;
      case 5:
        className = "rs-rate-green";
        break;
      case 6:
        className = "rs-rate-blue";
        break;
    }
  }
  return <Icon icon={icon} className={className} />;
};

type Props = {
  skills: Record<string, SkillDef>;
};

const SkillPrompt = ({ skills }: Props) => {
  const [skillValues, setSkillValues] = useState({});
  return (
    <Prompt label="Great! Do you have any of these skills trained?">
      <table>
        {Object.keys(skills).map(name => (
          <tr key={name}>
            <td>{name}</td>
            <td css={classes.cell.rating}>
              <Rate
                defaultValue={0}
                // character={<Icon icon="square" />}
                renderCharacter={renderCharacter}
                max={6}
                onChange={value =>
                  setSkillValues(s => ({ ...s, [name]: value - 1 }))
                }
                readOnly={false}
                size="sm"
              />
            </td>
          </tr>
        ))}
      </table>
      <pre>{JSON.stringify(skillValues, undefined, 2)}</pre>
    </Prompt>
  );
};

export default SkillPrompt;
