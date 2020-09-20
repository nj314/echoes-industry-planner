import React, { useCallback, useMemo } from "react";
import { Col, Input, InputGroup } from "rsuite";
import { parseNumber } from "../utils";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const IskInput = ({ onChange, value }: Props) => {
  const displayValue: string = useMemo(
    () => value.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    [value]
  );

  const handleChange = useCallback(
    valueString => {
      onChange(parseNumber(valueString) || 0);
    },
    [onChange]
  );

  return (
    <Col xs={12} md={8}>
      <InputGroup>
        <Input onChange={handleChange} size="lg" value={displayValue} />
        <InputGroup.Addon>ISK</InputGroup.Addon>
      </InputGroup>
    </Col>
  );
};

export default IskInput;
