import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  const items = products.map((item) => <ProductCard key={item.id} {...item} />)

  return <div className="products">{items}</div>
}
