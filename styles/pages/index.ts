import styled from "styled-components";
import { lighten } from "polished";

export const Jumbotron = styled.div`
  margin: 0 0 2rem;
  padding: 3rem 1rem;
  background: rgb(107, 217, 146);
  background: linear-gradient(45deg, #7d7d7d 0%, #979797 100%);
  color: #fff;
`;

export const JumbotronHead = styled.div`
  font-size: xx-large;
  font-weight: 900;
  text-decoration: underline;
`;

export const JumbotronLead = styled.p`
  padding: 1rem 0;
  font-size: large;
  color: #dbdbdb;
`;

export const Title = styled.h1`
  margin: 1rem;
  font-size: xx-large;
`;

export const Text = styled.p`
  margin: 1rem;
  line-height: 1.4;
  font-size: large;
`;

export const Contact = styled.div`
  margin: 2rem 1rem;
  text-align: center;
`;

interface ContactButtonProperties {
  color?: string;
  backgroundColor?: string;
  size?: string;
}

export const ContactButton = styled.a`
  display: inline-block;
  border-radius: 8rem;
  margin: 0 0.5rem 0.5rem;
  padding: 1rem 2rem;
  font-size: ${(props: ContactButtonProperties) => props.size || "large"};
  font-weight: 600;
  color: ${(props: ContactButtonProperties) => props.color || "#fff"};
  background-color: ${(props: ContactButtonProperties) =>
    props.backgroundColor || "#cf121b"};
  text-decoration: none;

  &:hover {
    background-color: ${(props: ContactButtonProperties) =>
      lighten(0.2, props.backgroundColor || "#cf121b")};
  }
`;
