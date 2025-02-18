import { ToastContainer, toast } from 'react-toastify';
import { useEffect,useState } from "react"

const AddProduct = ({ fetchProducts }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            description
        }

        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            },

        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            toast.error('Failed to add product', 
                {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        }

        if (response.ok) {
            // Clear form inputs
            setName('');
            setDescription('');
            setError(null);

            // Trigger the fetchProducts function passed from Home.js to update the product list
            fetchProducts();

            // Show success toast notification
            toast.success('New product added successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add A new Product</h3>

            <label> Product Name</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

            <label> Product Descriptiom</label>
            <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />

                <button type="submit">Add Product</button>
                <ToastContainer />
        </form>
    )
}

export default AddProduct