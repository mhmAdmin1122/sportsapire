import React from 'react'
import AdminLayout from '../L/AdminLayout'

const ProductUploader = () => {
    return (
        <AdminLayout>
            <form className='grid bg-blue-900 justify-items-center justify-center w-fit px-12 py-8 rounded-md'>
                <div className="shop_cardDetail grid">
                    <h1 className='text-center text-4xl text-[#fff] font-bold'>Crad Detail</h1>
                    <label htmlFor="">Card Title</label>
                    <input type="text" placeholder='Card Title' />
                    <label htmlFor="">Card About</label>
                    <textarea rows={5} cols={5} placeholder='About Card'/>
                    <label htmlFor="">Card Pic</label>
                    <input type="file" />
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder='$123....' />
                </div>
                <div className="product_postDetail grid">
                    <h1 className='py-4 text-2xl font-bold text-[#fff]'>More about Product</h1>
                    <label htmlFor="">Pic2</label>
                    <input type="file" />
                    <label htmlFor="">Pic3</label>
                    <input type="file" />
                    <label htmlFor="">Pic4</label>
                    <input type="file" />
                    <label htmlFor="">Pic5</label>
                    <input type="file" />
                    <label htmlFor="">Brand Name</label>
                    <input type="text" placeholder='Brand Name'/>
                    <label htmlFor="">Product Colour</label>
                    <input type="text" placeholder='Colour'/>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <button type='submit' className='rounded-md my-4'>Submit Product</button>
                </div>
            </form>
        </AdminLayout>
    )
}

export default ProductUploader
