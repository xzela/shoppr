import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Layout from '../components/layout'

export default function Home ( { items }) {
  console.log(items)
  return (
    <Layout home>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id}>
            <Form.Check type='checkbox' label={item.label} id={item.id} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
         items: [
        {
          id: 'apples',
          label: 'Apples'
        },
        {
          id: 'bananas',
          label: 'Bananas'
        },
        {
          id: 'lettuce',
          label: 'Lettuce'
        },
      ]
    }
  }
}
