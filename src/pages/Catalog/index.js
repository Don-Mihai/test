import Header from "../../components/Header"
import Product from "../../components/Product";

const Catalog = () => {

    const products = [
        {id: 1, name: 'Product 1', price: '$20'},
        {id: 2, name: 'Product 2', price: '$35'},
        {id: 3, name: 'Product 3', price: '$48'}
      ]

    return (
        <div>
            <Header />
            <h1 className="text-center">Catalog</h1>

            {products.map(product => {
                return (<Product product={product} />);
            })}
        </div>
    );
}

export default Catalog
