import NavBar from '../../components/NavBar/NavBar';
import Container from '@material-ui/core/Container';

const Page = (props) => {
  return (
        <Container maxWidth="xs" >
      <NavBar selected={props.selected} goToLanding={props.goToLanding}/>
          {props.children}
        </Container>
  );
}

export default Page;
