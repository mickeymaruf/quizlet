import React from 'react';

const Blog = () => {
    return (
        <section className='bg-slate-900 text-white pb-8 md:pb-20'>
            <div className='w-10/12 md:w-8/12 mx-auto'>
                <h3 className='text-2xl font-medium text-center mb-8'><code>QNA</code></h3>
                <div className="bg-slate-700 p-8 mb-10 rounded-xl relative">
                    <div className='text-2xl mb-1'><code>What is the purpose of React Router?</code></div>
                    <p className='text-lg font-thin'>
                        React router is a library for routing in React application. It allows you to create routes and link to them from your components. When a user clicks a link, React router will determine which route to use and render the corresponding component. <br />
                        In typical web application, whenever we naviagte through pages, it requests to the server and retrieves page. But in React Router, instead of requesting new URL request to the server, it swaps between components for each new URL request.
                    </p>
                </div>
                <div className="bg-slate-700 p-8 mb-10 rounded-xl relative">
                    <div className='text-2xl mb-1'><code>How does Context API work?</code></div>
                    <p className='text-lg font-thin'>
                        Context API is a way to pass data through the component tree without having to pass props down manually at every level. <br />
                        It's basically produce global varibales that can be passed around components, so that we can access it from anywhere within the component.
                    </p>
                </div>
                <div className="bg-slate-700 p-8 mb-10 rounded-xl relative">
                    <div className='text-2xl mb-1'><code>What is useRef?</code></div>
                    <p className='text-lg font-thin'>
                        The <strong>useRef</strong> Hook allows you to persist values between renders. <br />
                        It can be used to store a mutable value that does not cause a re-render when updated. <br />
                        It can be used to access a DOM element directly. <br />
                        <strong className='text-pink-500'>useRef()</strong> only returns one item. It returns an Object called current. <br />
                        When we initialize useRef we set the initial value: <strong className='text-pink-500'>useRef(0)</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;