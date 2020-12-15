import Landing from './Landing'
import Page from '../../components/Page/Page';
import { Container } from '@material-ui/core'

const LandingPage = (props) => {

    return (
      <Page>
        <Container maxWidth="xs">
          <Landing />
        </Container>
      </Page>
    )
}

export default LandingPage
