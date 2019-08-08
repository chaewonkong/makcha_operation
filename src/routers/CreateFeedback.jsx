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

class CreateFeedback extends Component {
  state = { content: "" };

  onTextChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const { content } = this.state;
    let formData = new FormData();
    const Uid = "admin";
    formData.append("feedback", content);
    formData.append("Uid", Uid);
    makchaApi.postFeedback(Uid, formData).then(res => {
      if (res.status === 200) window.location.href = "/";
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <InputWrapper>
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

export default CreateFeedback;
