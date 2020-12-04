import NavBar from '../../components/NavBar/NavBar';
import Container from '@material-ui/core/Container';

const Page = (props) => {
  return (
        <Container maxWidth="xs">
          <NavBar selected={props.selected}/>
          {props.children}
        </Container>
  );
}

export default Page;