import React from "react";
import { Col, Row } from "antd";
import { BasicLayout } from "../views/BasicLayout";
import { store } from "../app/store";

export const Summary = () => {
  return (
    <BasicLayout>
      <Row justify="center">
        <Col span={24}>
          <div style={{ width: 900, height: "100vh", margin: "100px auto" }}>
            <h1>
              <b>Twoja rezerwacja przebiegła pomyślnie!</b>
            </h1>
            <p></p>
            <p>Wybrałeś miejsca:</p>
            {store.getState().selected.value.map((x) => (
              <p key={x.x + x.y}>
                - rząd x{x.x}, miejsce y{x.y} (id s{x.x}
                {x.y})
              </p>
            ))}
            <p></p>
            <p></p>
            <h3>
              <b>
                Dziękujemy! W razie problemów prosimy o kontakt z działem
                administracji.
              </b>
            </h3>
          </div>
        </Col>
      </Row>
    </BasicLayout>
  );
};
