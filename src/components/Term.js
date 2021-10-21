import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoTagsQuery } from "../services/cryptotagsApi";
import Loader from "./Loader";
const { Text, Title } = Typography;
const { Option } = Select;

const Term = () => {
  const { data, isFetching } = useGetCryptoTagsQuery();
  console.log(data);
  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Terminology associated with Cryptocurrency
      </Title>
      <Row gutter={[24, 24]}>
        {data.map((item, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <div className="news-image-container">
                <Title className="item-title" level={4}>
                  {item.name}
                </Title>
              </div>
              <p>{item.description}</p>
              <div className="provider-container">
                <Text>
                  Type: <i>{item.type}</i>
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Term;
