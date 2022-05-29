import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Shoes',
      description: 'Walking shoes',
      price: '$5',
      imageLink:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'HP Pro Laptop',
      price: '$10',
      imageLink:
        'https://images.pexels.com/photos/844733/pexels-photo-844733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
export default Products
