import NavBar from '../../components/NavBar/NavBar';
import Container from '@material-ui/core/Container';

const Page = (props) => {
  return (
        <Container maxWidth="xs" disableGutters>
          <NavBar loginFunc={props.loginFunc} selected={props.selected}/>
          {props.children}
        </Container>
  );
}

export default Page;
