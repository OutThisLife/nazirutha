import styled from 'styled-components'

const Footer = styled.footer`
  color: rgb(var(--bg));
  text-align: center;
  background: rgb(var(--color));

  div {
    grid-column: 3 / -3;
  }
`

export default () => (
  <Footer>
    <div>
      <small>If Will stops and cries Why, invoking Because, then Will stops & does nought.</small>
    </div>
  </Footer>
)
