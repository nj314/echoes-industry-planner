import React from "react";
import { css } from "@emotion/core";
import { Field } from "react-final-form";
import { Icon, Rate } from "rsuite";
import { ProductSubtype, SkillDef } from "../../../game-model/types";
import { NestedPartial } from "../../../utils/utility-types";

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
    /*
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
    */
    className = "rs-rate-blue";
  }
  return <Icon icon={icon} className={className} />;
};

type Props = { skills: Record<string, SkillDef> };

const SkillPicker = ({ skills }: Props) => {
  return (
    <table>
      <tbody>
        {Object.keys(skills || {}).map(name => (
          <tr key={name}>
            <td>{name}</td>
            <td css={classes.cell.rating}>
              <Field defaultValue={0} name={`skills.${name}`}>
                {({ input }) => (
                  <Rate
                    max={6}
                    onChange={value => input.onChange(Math.max(0, value - 1))}
                    readOnly={false}
                    renderCharacter={renderCharacter}
                    size="sm"
                    value={input.value + 1}
                  />
                )}
              </Field>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkillPicker;
