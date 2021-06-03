import React from "react";
import { Button, Form, Card, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import { BasicLayout } from "../views/BasicLayout";
import { store } from "../app/store";
import { addValue, removeValue, resetSelected } from "../app/selectedSlice.js";
import { decrement } from "../app/numberOfSeatsSlice.js";

export const Seat = ({ data, all }) => {
  let styleBlank = {
    height: 50,
    width: 50,
    borderColor: "white",
  };
  let styleFree = {
    height: 50,
    width: 50,
    borderColor: "black",
  };
  let styleReserved = {
    height: 50,
    width: 50,
    borderColor: "black",
    backgroundColor: "gray",
  };
  let styleClicked = {
    height: 50,
    width: 50,
    borderColor: "black",
    backgroundColor: "orange",
  };

  let style = styleBlank;
  let clickable = false;
  for (var i = 0; i < all.length; i++) {
    if (all[i].cords.x === data.x && all[i].cords.y === data.y) {
      if (all[i].reserved) {
        style = styleReserved;
        clickable = false;
      } else {
        if (store.getState().numberOfSeats.value > 0) {
          store.dispatch(addValue({ x: data.x, y: data.y }));
          store.dispatch(decrement());
          style = styleClicked;
          clickable = true;
        } else {
          style = styleFree;
          clickable = true;
        }
      }
    }
  }

  function onClick(id) {
    if (document.getElementById(id).style.backgroundColor === "orange") {
      document.getElementById(id).style.backgroundColor = "white";
      store.dispatch(removeValue({ x: data.x, y: data.y }));
    } else if (
      document.getElementById(id).style.backgroundColor === "gray" ||
      document.getElementById(id).style.borderColor === "white"
    ) {
    } else {
      document.getElementById(id).style.backgroundColor = "orange";
      store.dispatch(addValue({ x: data.x, y: data.y }));
    }
  }
  return (
    <Col span={1.5}>
      <div onClick={() => onClick(`seat-${data.x}-${data.y}`)}>
        <Card
          id={`seat-${data.x}-${data.y}`}
          data-cy={`seat-${data.x}-${data.y}`}
          hoverable={clickable}
          style={style}
        ></Card>
      </div>
    </Col>
  );
};

export const Reserve = () => {
  const history = useHistory();
  store.dispatch(resetSelected());

  const onFinish = () => {
    history.push("/summary");
  };

  let demo = (color, text) => (
    <Row>
      <Col span={1.5}>
        <Card
          data-cy={`seat-demo`}
          hoverable={false}
          style={{
            height: 50,
            width: 50,
            borderColor: "black",
            backgroundColor: color,
          }}
        ></Card>
      </Col>
      <p style={{ marginTop: 12, marginLeft: 10 }}>{text}</p>
    </Row>
  );

  return (
    <BasicLayout>
      <Row justify="center">
        <Col span={24}>
          <div style={{ width: 900, margin: "100px auto", height: "100vh" }}>
            <div style={{ marginBottom: 50 }}>
              <Row gutter={[10, 10]}>
                {store.getState().grid.value.map((x) => (
                  <Seat
                    key={`seat-${x.x}-${x.y}`}
                    data={x}
                    all={store.getState().data.value}
                  />
                ))}
              </Row>
            </div>
            <Row justify="center">
              <Col span={6}>{demo("white", "Miejsca dostępne")}</Col>
              <Col span={6}>{demo("gray", "Miejsca zarezerwowane")}</Col>
              <Col span={6}>{demo("orange", "Twój wybór")}</Col>
              <Col span={6}>
                <Form
                  name="Reserve"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
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
                      Rezerwuj
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </BasicLayout>
  );
};
