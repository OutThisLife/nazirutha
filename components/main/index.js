import styled from 'styled-components'

const Main = styled.main`
  align-items: center;
`

export default ({ children, ...props }) => <Main {...props}>{children}</Main>
