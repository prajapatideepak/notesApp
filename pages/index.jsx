import React from "react";
import Link from "next/link";
import Nav from "../src/component/nav";

const Page = ()=> {
    return( <div>
    <Nav />
                <h1>Index Page</h1>
                <Link href="/notes">
                    
                        Notes
                    
                </Link>
         </div>)
}

export default Page