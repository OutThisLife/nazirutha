import styled from 'styled-components'

const Footer = styled.footer`
  color: rgb(var(--bg));
  text-align: center;
  padding: 0.8vmax 0;
  background: rgb(var(--color));

  div {
    opacity: 0.4;
    grid-column: 3 / -3;
    text-shadow: none;
  }
`

export default () => (
  <Footer>
    <div>
      <small>If Will stops and cries Why, invoking Because, then Will stops & does nought.</small>
    </div>
  </Footer>
)
