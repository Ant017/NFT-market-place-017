import { useState } from 'react'
import './AmazeNFT.css'

export function AmazeNFT() {
    return (
        <>
        <div className="part-3-amaze-nft">
            <div className="overlap-9">
              <p className="part-3-text">The amazing NFT art of the world here</p>
              <div className="part-3-growth">
                <img className="part-3-chart-square" alt="Chart square" src="/static/img/chart-square-2.svg" />
                <div className="part-3-growth-heading">Growth Transaction</div>
                <p className="part-3-growth-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                </p>
              </div>
              <div className="part-3-fast">
                <img className="part-3-card-tick" alt="Card tick" src="/static/img/card-tick-1-1.svg" />
                <div className="part-3-fast-heading">Fast Transaction</div>
                <p className="part-3-fast-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
          </div>
        </>
    )
}