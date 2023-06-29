import { useState } from 'react'
import './TopBar.css'

export function TopBar() {
    return (
        <>
            <div className="top-bar">
                <a className="nft-logo" href="#">NFters</a>
                <a className="frame-1" href="#">Connect Wallet</a>
                <a className="frame-2" href="#">Upload</a>
                <div className="group">
                    <a className="top-bar-marketplace" href="#">Marketplace</a>
                    <a className="top-bar-resources" href="#">Resource</a>
                    <a className="top-bar-about" href="#">About</a>
                </div>
                <div>
                    <input placeholder="    Search" className='top-bar-search' />
                    <img className="top-bar-search-image" alt="search-icon" src="/static/img/search-normal-1-1.svg" />
                </div>
            </div>
        </>
    )
}