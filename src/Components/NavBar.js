import { Navbar, Button, Form, FormControl } from "react-bootstrap";

export default function NavBar() {
    return (
        <div className="NavBar">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#"><img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-youtube-png-transparent.png" className="App-logo" alt="logo" width="10%" height="auto" /></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}
