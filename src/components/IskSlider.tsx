import React from "react";
import { Col, InputGroup, InputNumber, RangeSlider, Row } from "rsuite";

type Props = {
  min?: number;
  max?: number;
  step?: number;
  value: [number, number];
  setValue: (value: [number, number]) => void;
};

const IskSlider = ({
  min = 0,
  max = 1000000000,
  step = 1000000,
  value,
  setValue,
}: Props) => {
  return (
    <Row>
      <Col md={10}>
        <RangeSlider
          progress
          graduated
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
      </Col>
      <Col md={8}>
        <InputGroup>
          <InputNumber
            min={min}
            max={max}
            value={value[0]}
            onChange={nextValue => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue as number, end]);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={min}
            max={max}
            value={value[1]}
            onChange={nextValue => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue as number]);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default IskSlider;
