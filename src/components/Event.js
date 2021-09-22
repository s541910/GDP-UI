import React, { Component } from 'react'

import { Redirect } from "react-router-dom";

 
function Event({authorized})
{
    if(!authorized)
    {
        return <Redirect to ="/Login"/>;
    }

        return (
            <div>
                <h1 style color="red">Sorry our website is still under developing stage</h1>
            </div>
        )
    }


export default Event
