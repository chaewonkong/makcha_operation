import React, { Component } from "react";
import { List as DefaultList, Pagination } from "antd";
import styled from "styled-components";
import { makchaApi } from "../api";
import { Container } from "../components/common";
import Header from "../components/Header";

const List = styled(DefaultList)`
  //   margin-top: 5rem;
  position: absolute;
  width: 90%;
  top: 5rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Feedback extends Component {
  state = { content: [], pageSize: 5, current: 1 };
  componentDidMount() {
    makchaApi.getFeedback(0).then(res => {
      this.setState({
        content: res.data.content,
        totalPages: res.data.totalPages
      });
    });
  }

  onChange = page => {
    this.setState({
      current: page
    });

    makchaApi.getFeedback(page - 1).then(res => {
      this.setState({
        content: res.data.content
      });
    });
  };

  render() {
    const { current, pageSize, totalPages, content } = this.state;
    return totalPages ? (
      <Container>
        <Header />
        <List
          current={this.state.current}
          footer={
            <PaginationContainer>
              <Pagination
                current={current}
                defaultPageSize={pageSize}
                defaultCurrent={1}
                total={totalPages * pageSize}
                onChange={this.onChange}
              />
            </PaginationContainer>
          }
          bordered
          dataSource={content}
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
      </Container>
    ) : (
      <div>Loading</div>
    );
  }
}

export default Feedback;
