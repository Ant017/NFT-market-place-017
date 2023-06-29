import { useState } from 'react'
import './Footer.css'

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="marketplace">
                    <div className="all-nfts-new-art">
                        <a href='' className='links'>All NFTs</a>
                        <br />
                        <a href='' className='links'>New</a>
                        <br />
                        <a href='' className='links'>Art</a>
                        <br />
                        <a href='' className='links'>Sports</a>
                        <br />
                        <a href='' className='links'>Utility</a>
                        <br />
                        <a href='' className='links'>Music</a>
                        <br />
                        <a href='' className='links'>Domain Name</a>
                        
                    </div>
                    <div className="text-wrapper-119">Market Place</div>
                </div>
                <div className="NFT-marketplace">
                    <div className="text-wrapper-120">NFters</div>
                    <p className="text-wrapper-121">
                        The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
                        Buy, sell, and discover exclusive digital items.
                    </p>
                    <a href='https://www.facebook.com/'><img className="facebook" alt="Facebook" src="/static/img/facebook.svg" /></a>
                    <a href='https://twitter.com/home?lang=en'><img className="twitter" alt="Twitter" src="/static/img/twitter.svg" /></a>
                    <a href='https://www.linkedin.com/feed/'><img className="linkedin" alt="Linkedin" src="/static/img/linkedin.svg" /></a>
                    
                </div>
                <div className="my-account">
                    <div className="profile-favorite-my">
                    <a href='' className='links'>Profile</a>
                        <br />
                        <a href='' className='links'>Favorite</a>
                        <br />
                        <a href='' className='links'>My Collections</a>
                        <br />
                        <a href='' className='links'>Settings</a>
                    </div>
                    <div className="text-wrapper-122">My Account</div>
                </div>
                <div className="stay-in-the-loop">
                    <p className="text-wrapper-123">
                        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
                        for navigating NFTs.
                    </p>
                    <div className="stay-in-the-loop-2">Stay In The Loop</div>
                    <div className="field-email">
                        <div className='overlap-group-7'>
                            <input placeholder="Enter your email address.." className="text-wrapper-124"></input>
                            <a href="#" className='CTA'>Subscibe Now</a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="text-wrapper-126">Copyright © 2022 Avi Yansah</p>
                    <img className="line-9" alt="Line" src="/static/img/line-17.svg" />
                </div>
            </footer>
        </>
    )
}