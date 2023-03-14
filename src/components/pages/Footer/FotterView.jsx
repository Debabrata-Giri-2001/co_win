import React from 'react'

export default function FotterView({
    HeadLink = "Register Members",
    Link = "http://..com"
}) {
    return (
        <div className='p-1'>
            <a href={Link}>{HeadLink}</a>
        </div>
    )
}
