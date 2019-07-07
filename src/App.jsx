import React, { Component } from "react";
import axios from "axios";
import { List, Typography } from "antd";
import styled from "styled-components";

const HeaderText = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  state = { content: [] };
  componentDidMount() {
    axios
      .get("https://api.makkcha.com/feedback?page=0&limit=5")
      .then(res => this.setState({ content: res.data.content }));
  }
  render() {
    console.log(this.state.content);
    return (
      <List
        header={<HeaderText>막차 운영 시스템</HeaderText>}
        footer={<div>Footer</div>}
        bordered
        dataSource={this.state.content}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<p>{item.createdDate}</p>}
              description={"사용자: " + item.uid}
            />
            {item.feedback}
          </List.Item>
        )}
      />
    );
  }
}

export default App;
