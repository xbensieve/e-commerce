import React from "react";
import { Layout, Typography, Card, Row, Col, List } from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#f0f2f5",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Title level={2}>Welcome to Our E-commerce Store</Title>
        <Paragraph>Find the best products at unbeatable prices!</Paragraph>
      </Header>

      <Content style={{ padding: "20px" }}>
        <section style={{ marginBottom: "40px" }}>
          <Title level={3}>Featured Products</Title>
          <Row gutter={[16, 16]}>
            {/* Replace with dynamic product cards */}
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

      <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5" }}>
        <Paragraph>
          &copy; {new Date().getFullYear()} E-commerce Store. All rights
          reserved.
        </Paragraph>
      </Footer>
    </Layout>
  );
};

export default Home;
