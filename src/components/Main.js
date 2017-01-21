require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
var imageDatas = require('json!../data/imageDatas.json');
//将图片名信息转换为url
imageDatas = (function(imageDatasArray){
  for(var i = 0, j = imageDatasArray.length; i < j; i++){
    var singleImageData = imageDatasArray[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArray[i] = singleImageData;
  }
  return imageDatasArray;
})(imageDatas);

//声明图片流组件
class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-sec__img-figure">
        <img src = {this.props.data.imageURL} alt = {this.props.data.title}/>
        <figcaption>
          <h2 className="img-sec__img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.Constant = {
      centerPos: {
        left: 0,
        top: 0
      },
      hPosRange: {
        leftSecX: [0,0],
        rightSecX: [0,0],
        y: [0,0]
      },
      vPosRange: {
        x: [0,0],
        topY: [0,0]
      }
    };
  }
  render() {
    var controllerUnits = [],
      imgFigures = [];

    imageDatas.forEach(function(value,index){
        imgFigures.push(<ImgFigure data = {value} key={index}/>);
      }
    );
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
