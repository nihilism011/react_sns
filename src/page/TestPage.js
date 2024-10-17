import { Button, Card, Input, Radio, Space, Layout } from "antd";
import React, { useState, useEffect, useRef } from "react";
const calcul = (obj) => {
  if (obj.calc === "+") {
    return +obj.num1 + +obj.num2;
  }
  if (obj.calc === "*") {
    return +obj.num1 * +obj.num2;
  }
  if (obj.calc === "/") {
    return +obj.num1 / +obj.num2;
  }
  if (obj.calc === "-") {
    return +obj.num1 - +obj.num2;
  }
  return null;
};
function TestPage() {
  const [answer, setAnswer] = useState(null);
  const numRef = useRef({ num1: null, num2: null, calc: null });

  return (
    <Layout>
      <Space>
        <Input
          type="number"
          placeholder="first number"
          onChange={(e) => {
            numRef.current.num1 = e.target.value;
          }}
        />
        <Input
          type="number"
          placeholder="second number"
          onChange={(e) => {
            numRef.current.num2 = e.target.value;
          }}
        />
      </Space>
      <Space>
        <Radio.Group
          onChange={(e) => {
            numRef.current.calc = e.target.value;
          }}
        >
          <Radio value={"+"}>+</Radio>
          <Radio value={"-"}>-</Radio>
          <Radio value={"*"}>*</Radio>
          <Radio value={"/"}>/</Radio>
        </Radio.Group>
      </Space>
      <Button
        onClick={() => {
          console.log(numRef.current);
          setAnswer(calcul(numRef.current));
        }}
      >
        계산
      </Button>
      {answer && (
        <Card
          title={answer}
          style={{
            width: 300,
          }}
        />
      )}
    </Layout>
  );
}

export default TestPage;
