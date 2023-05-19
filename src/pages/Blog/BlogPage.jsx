/* eslint-disable react/no-unescaped-entities */


const BlogPage = () => {
    return (
        <div>
            <h2 className="text-center text-5xl text-violet-600 font-bold">this is blog</h2>
            {/* card sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-12 ">
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                        <h2 className="card-title">First Question Answer</h2>
                        <h3><strong>What is an access token and refresh token? How do they work and where should we store them on the client-side?</strong></h3>
                        <p>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                        <h2 className="card-title">Second Question Answer</h2>
                        <h3><strong>Compare SQL and NoSQL databases?</strong></h3>
                        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                        <h2 className="card-title">Third Question Answer</h2>
                        <h3><strong>What is express js? What is Nest JS?</strong></h3>
                        <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                        <h2 className="card-title">Fourth Question Answer</h2>
                        <h3><strong>What is MongoDB aggregate and how does it work?</strong></h3>
                        <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;