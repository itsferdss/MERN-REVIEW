import { FaTrash, FaEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { Modal } from './Modal';
const ProductBox = ({ product, fetchProducts }) => {

    const [openModal, setOpenModal] = useState(false)


    const dltProduct = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/product/${product._id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            console.log('Product deleted successfully');
            fetchProducts();
            toast.info('Product deleted successfully!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
        } else {
            console.error('Failed to delete product');
            toast.error('Failed to delete product', {
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

    return(
        <div className="product-box">
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <div className="trash">
                <FaTrash className="trashIcon" onClick={dltProduct}/>
                <FaEdit className="editIcon"
                onClick={() => {
                    setOpenModal(true);
                }}/>
            </div>

        </div>
        
    )
    
}

export default ProductBox;