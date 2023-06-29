import PropTypes from "prop-types";
import React from "react";
import "./list.css";

export const ContentLisitngNft = ({
  style,
  overlapGroupStyle,
  frameStyle,
  elementLeftStyle,
  spanStyle,
  spanStyleOverride,
  spanStyle1,
  overlapStyle,
  imageStyle,
  image = "/img/image-1.svg",
  ellipseStyle,
  ellipse = "/img/ellipse-95-78.png",
  ellipseStyleOverride,
  img = "/img/ellipse-95-77.png",
  imgStyle,
  ellipse1 = "/img/ellipse-95-76.png",
  imgStyleOverride,
  ellipse2 = "/img/ellipse-95-75.png",
  kingcryptoStyle,
  text = "KingCrypto",
  elementOfStyle,
  lineStyle,
  line = "/img/line-9-16.svg",
  frameStyleOverride,
  ethereumStyle,
  ethereum = "/img/ethereum-2-22.svg",
  elementEthStyle,
  placeABidStyle,
}) => {
  return (
    <div className="content-lisitng-NFT" style={style}>
      <div className="overlap-group" style={overlapGroupStyle}>
        <div className="frame" style={frameStyle}>
          <div className="element-left" style={elementLeftStyle}>
            <span className="text-wrapper">3</span>
            <span className="span" style={spanStyle}>
              h
            </span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="text-wrapper-3">50</span>
            <span className="text-wrapper-4" style={spanStyleOverride}>
              m
            </span>
            <span className="text-wrapper-5">&nbsp;</span>
            <span className="text-wrapper-6">2</span>
            <span className="text-wrapper-7" style={spanStyle1}>
              s
            </span>
            <span className="text-wrapper-8"> left</span>
          </div>
        </div>
        <div className="overlap" style={overlapStyle}>
          <img className="image" style={imageStyle} alt="Image" src={image} />
          <img className="ellipse" style={ellipseStyle} alt="Ellipse" src={ellipse} />
          <img className="img" style={ellipseStyleOverride} alt="Ellipse" src={img} />
          <img className="ellipse-2" style={imgStyle} alt="Ellipse" src={ellipse1} />
          <img className="ellipse-3" style={imgStyleOverride} alt="Ellipse" src={ellipse2} />
        </div>
        <div className="kingcrypto" style={kingcryptoStyle}>
          {text}
        </div>
        <div className="element-of" style={elementOfStyle}>
          1 of 321
        </div>
        <img className="line" style={lineStyle} alt="Line" src={line} />
        <div className="div" style={frameStyleOverride}>
          <img className="ethereum" style={ethereumStyle} alt="Ethereum" src={ethereum} />
          <div className="element-ETH" style={elementEthStyle}>
            0.25 ETH
          </div>
        </div>
        <a href="#" className="place-a-bid" style={placeABidStyle}>Place a bid</a>
      </div>
    </div>
  );
};

ContentLisitngNft.propTypes = {
  image: PropTypes.string,
  ellipse: PropTypes.string,
  img: PropTypes.string,
  ellipse1: PropTypes.string,
  ellipse2: PropTypes.string,
  text: PropTypes.string,
  line: PropTypes.string,
  ethereum: PropTypes.string,
};
