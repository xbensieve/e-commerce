import React from "react";
import { Layout, Typography, Card, Row, Col, List } from "antd";
import MainLayout from "../layouts/MainLayout";
const { Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Content style={{ padding: "20px" }}>
        <section style={{ marginBottom: "40px" }}>
          <Title level={3}>Featured Products</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Product 1" src="/assets/shirt.webp" />}
              >
                <Card.Meta title="Product 1" description="$10.00" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Product 2" src="/assets/shirt1.webp" />}
              >
                <Card.Meta title="Product 2" description="$20.00" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Product 3" src="/assets/shirt2.webp" />}
              >
                <Card.Meta title="Product 3" description="$30.00" />
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <Title level={3}>Why Shop With Us?</Title>
          <List
            dataSource={[
              "Wide range of products",
              "Affordable prices",
              "Fast and reliable shipping",
              "Excellent customer service",
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </section>
      </Content>
    </MainLayout>
  );
};

export default Home;
