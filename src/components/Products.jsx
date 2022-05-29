import Grid from '@material-ui/core'
import Product from './Product'

const Products = () => {
  const products = [
    { id: 1, name: 'Shoes', description: 'Walking shoes' },
    { id: 2, name: 'Laptop', description: 'HP Pro Laptop' },
  ]

  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
export default Products
