import styled from 'styled-components'

const Main = styled.main``

export default ({ children, ...props }) => <Main {...props}>{children}</Main>
