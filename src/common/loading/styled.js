import styled, { keyframes } from "styled-components";




const loading = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const LoadingContainer = styled.div`
  /* background: #222; */
  text-align: center;
  padding: 20%;
  margin-top:50%;
  h2 {
  color: #333;
  margin: 0;
  font: 1.2em verdana;
  text-transform: uppercase;
  letter-spacing: .1em;
}
span {
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  margin: .19em;
  background: #b66fff;
  border-radius: .6em;
  animation: ${loading} 1s infinite alternate;
}
 span:nth-of-type(2) {
  background: #a349ff;
  animation-delay: 0.2s;
}
 span:nth-of-type(3) {
  background: #8720f0;
  animation-delay: 0.4s;
}
 span:nth-of-type(4) {
  background: #6400c9;
  animation-delay: 0.6s;
}
 span:nth-of-type(5) {
  background: #8720f0;
  animation-delay: 0.8s;
}
 span:nth-of-type(6) {
  background: #a349ff;
  animation-delay: 1.0s;
}
 span:nth-of-type(7) {
  background: #b66fff;
  animation-delay: 1.2s;
}
`






