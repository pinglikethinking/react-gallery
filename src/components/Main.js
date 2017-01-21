require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');
//将图片名信息转换为url
imageDatas = (function(imageDatasArray){
  for(var i = 0, j = imageDatasArray.length; i < j; i++){
    var singleImageData = imageDatasArray[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArray[i] = singleImageData;
  }
  return imageDatasArray;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
