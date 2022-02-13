import _Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export function eventHandler(event) {
  console.log(event)
}

export function changeHandler(event) {
  console.log(event.target.value)
}
export default function Navbar({ children }) {
  return (
    <_Navbar bg='light' expand='true' fluid='false'>
      <Container fluid='true' >
        <Form className='d-flex'>
          <_Navbar.Toggle aria-controls='navbarScroll' />
          <FormControl
            id='item_search'
            type='search'
            placeholder='Search'
            className=''
            aria-label='Search'
            onChange={changeHandler}
          />
          <Button variant='outline-success' onClick={eventHandler}>Add</Button>
        </Form>
        <_Navbar.Collapse id='navbarScroll'>
            Wut?
        </_Navbar.Collapse>
      </Container>
    </_Navbar>
  )
};
