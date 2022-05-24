import React from 'react'
import MainLayout from '../layouts/MainLayout'

const NotFound = () => {
    <MainLayout>
        <div style={notfound}>
            <h1>404 not found page</h1>
        </div>
    </MainLayout>
}

export default NotFound;

const notfound = {
    padding: "0 6rem"
}