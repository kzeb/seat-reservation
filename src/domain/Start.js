import React, { useEffect } from "react";
import { Button, Form, Input, Checkbox, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { BasicLayout } from "../views/BasicLayout";
import { store } from "../app/store";
import { saveNumber } from "../app/numberOfSeatsSlice.js";
import { saveValue } from "../app/sideBySideSlice.js";
import { saveGrid } from "../app/gridSlice.js";
import { saveData } from "../app/dataSlice.js";
import { API } from "../services/api";

export const Start = () => {
  const history = useHistory();

  useEffect(() => {
    API.get("/seats").then((response) => {
      store.dispatch(saveData(response.data));
    });
    //.then(console.log(store.getState().grid.value));
  }, []);

  const onFinish = (values) => {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 15; j++) {
        temp.push({ x: i, y: j });
      }
    }
    store.dispatch(saveGrid(temp));
    store.dispatch(saveNumber(values.numberOfSeats));
    history.push("/reserve");
  };

  function onChange(e) {
    if (store.getState().sideBySide.value) {
      store.dispatch(saveValue(false));
    } else {
      store.dispatch(saveValue(true));
    }
  }

  return (
    <BasicLayout>
      <div
        style={{
          maxWidth: 300,
          height: "100vh",
          margin: "100px auto",
          marginTop: "35vh",
        }}
      >
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row>
            <Col span={12}>
              <p style={{ marginTop: 5 }}>Liczba miejsc:</p>
            </Col>
            <Col span={12}>
              <Form.Item
                name="numberOfSeats"
                rules={[
                  {
                    required: true,
                    message:
                      "Please input the number of seats you want to book!",
                  },
                ]}
              >
                <Input
                  data-cy="numberOfSeats"
                  style={{
                    borderColor: "black",

                    float: "right",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Checkbox
              onChange={onChange}
              style={{
                borderColor: "black",
              }}
            >
              Czy miejsca mają być obok siebie?
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                height: 50,
              }}
            >
              Wybierz miejsca
            </Button>
          </Form.Item>
        </Form>
      </div>
    </BasicLayout>
  );
};
