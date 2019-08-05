import React, { Component } from "react";
import { List as DefaultList, Pagination, Icon } from "antd";
import styled from "styled-components";
import { Container } from "../components/common";
import { makchaApi } from "../api";
import Header from "../components/Header";

const List = styled(DefaultList)`
  //   margin-top: 5rem;
  position: absolute;
  width: 90%;
  top: 5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Notice extends Component {
  state = { content: [], pageSize: 5, current: 1 };
  componentDidMount() {
    makchaApi.getNotice(0, this.state.pageSize).then(res => {
      console.log(res.data);
      this.setState({
        content: res.data.content,
        totalPages: res.data.totalPages
      });
    });
  }

  onDelete(noticeId) {
    makchaApi.deleteNotice(noticeId).then(res => {
      if (res.status === 200) window.location.reload();
    });
  }

  onChange = page => {
    this.setState({
      current: page
    });
    // makchaAPI.getFeedback().then(res => {
    makchaApi.getFeedback(page - 1, this.state.pageSize).then(res => {
      this.setState({
        content: res.data.content
      });
      console.log(res.data);
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
                title={
                  <TitleWrapper>
                    <p>{item.title}</p>

                    <Icon type="close" onClick={() => this.onDelete(item.id)} />
                  </TitleWrapper>
                }
                description={item.content}
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

export default Notice;
