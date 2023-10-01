import Head from 'next/head'
import React from 'react'
import AdminLayout from '../../AdminComponents/L/AdminLayout'

const index = () => {
    return (
        <>

            <Head>
                <title>Admin User List</title>
            </Head>

            <AdminLayout>
                <button className='px-6 py-3 bg-gray-600 text-[#ececec] rounded-md text-2xl font-bold'> + Add User</button>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut magnam, reprehenderit, vel explicabo corrupti enim deserunt maiores ea a aliquid nulla! A, provident atque repellendus dolorum consequatur tempore odit repellat laborum assumenda aperiam ullam delectus error, earum repudiandae quia facilis sint velit. Repellendus cupiditate maxime hic dolore cum officiis natus voluptate culpa assumenda itaque, quos, molestias, incidunt veritatis debitis aperiam enim quaerat architecto illum saepe! Hic dolorum alias rerum vel. Perspiciatis, vero deserunt saepe, reprehenderit ipsa mollitia deleniti ut, excepturi necessitatibus velit recusandae possimus quidem harum veritatis esse alias in consectetur at ad ex aperiam. Eveniet, ullam consequatur ex sit ipsa earum dolore odio incidunt aliquid praesentium, dicta, reprehenderit iste amet! Temporibus tenetur at consectetur officiis sint quisquam accusamus tempora in ullam, accusantium facere recusandae molestias magni? Qui non id odit commodi laborum debitis asperiores accusantium voluptates rem, placeat suscipit alias eveniet quasi obcaecati saepe itaque consequatur aperiam! Non neque, autem ducimus voluptate sunt libero ab deserunt. Accusamus sunt nostrum similique tempore, dicta ex blanditiis sit saepe sint eos nulla culpa corporis itaque dolorem nobis quam nihil ea dolorum modi totam omnis assumenda aperiam? Perferendis minus non harum esse placeat? Nemo blanditiis molestias ipsam quaerat ut quae amet enim facere!
                    </p>
                </div>
            </AdminLayout>

        </>
    )
}

export default index
