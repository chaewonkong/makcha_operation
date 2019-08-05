import React, { Component } from "react";
import { Link } from "../components/common";
import styled from "styled-components";
import { Input, Button } from "antd";
import Header from "../components/Header";
import { makchaApi } from "../api";

const { TextArea } = Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-top: 5rem;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class CreateNotice extends Component {
  state = { title: "", text: "" };

  onTextChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const { title, content } = this.state;
    makchaApi.postNotice({ title, content }).then(res => {
      if (res.status === 200) window.location.href = "/notice";
    });
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Header />
        <InputWrapper>
          <Input
            value={this.state.title}
            name="title"
            placeholder="제목"
            onChange={this.onTextChange}
          />
          <TextArea
            placeholder="내용"
            name="content"
            rows={6}
            value={this.state.content}
            onChange={this.onTextChange}
            onPressEnter={this.onSubmit}
          />
        </InputWrapper>
        <ButtonContainer>
          <Link to="/notice">
            <Button type="danger">취소</Button>
          </Link>
          <Button type="primary" onClick={this.onSubmit}>
            확인
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

export default CreateNotice;
