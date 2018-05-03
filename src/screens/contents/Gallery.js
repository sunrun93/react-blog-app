import React, { Component} from 'react';
import styles from './Gallery.css';
import ReactDOM from 'react-dom';

let data = require('../../data.json');
let picSummary = data.pictureInfo;

let imgSum = (function () {
    let imageDataArr = [];
    picSummary.forEach((pic) => {
        let singleImageData = pic;
        let imgUrl = require('../../images/' + pic.fileName);
        singleImageData.imgUrl = imgUrl;
        imageDataArr.push(singleImageData);
    })
    return imageDataArr;
})();

class ImageSqure extends React.Component{
    constructor(props) {
        super(props);

    }
    handelClick(e) {
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }

        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        let styleObj={};
        //如果props属性中制定了这张图片的位置，则使用
        if (this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
        }
        //如果图片须安装角度值不为0，添加旋转角度
        if (this.props.arrange.rotate) {
            ['MozTransform', 'msTransform', 'WebkitTransform', 'transform'].forEach(function (value) {
                styleObj[value] = `rotate(${this.props.arrange.rotate}deg)`;
            }.bind(this))
        }
        if (this.props.arrange.isCenter) {
            styleObj.zIndex = 11;
        }
        return (
            <figure className={styles.picPane} style={styleObj} onClick={this.handelClick.bind(this)}>
                <img className={styles.img} src={this.props.data.imgUrl} />
                <figcaption>
                    <h2 className={styles.imageTitle}>{this.props.data.title}</h2>
                    <div className={styles.backImg}>
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

function getRangeRandom(low,high){
  return Math.ceil(Math.random()*(high-low)+low);
}

function get30degRandom() {
    return (Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 3);
}

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.constant = {
            centerPos: {
                left: 0,
                top: 0
            },
            hPosRange: {//水平方向取值范围
                leftSecX: [0, 0],//左分区
                rightSecX: [0, 0],//右分区
                y: [0, 0]
            },
            vPosRange: {//垂直方向取值范围
                x: [0, 0],
                topY: [0, 0]
            }
        }
        this.state = {
            imgsArrangeArr:[]
        }
    }

    inverse(index) {
        return function () {
            var imgsArrangeArr = this.state.imgsArrangeArr;
            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
            this.setState({
                imgsArrangeArr: imgsArrangeArr
            })
        }.bind(this)
    }

    center(index) {
        return function () {
            this.rearrange(index);
        }.bind(this);
    }

    componentDidMount(){
        let stage = ReactDOM.findDOMNode(this.refs.stage);
        let stageW = stage.clientWidth;
        let stageH = stage.clientHeight;
        let halfStageW = Math.ceil(stage.clientWidth/2);
        let halfStageH = Math.ceil(stage.clientHeight/2);

        let imageSqureDom = ReactDOM.findDOMNode(this.refs.imageSqure0);
        let halfImageW = Math.ceil(imageSqureDom.clientWidth/2);
        let halfImageH = Math.ceil(imageSqureDom.clientHeight/2);
        //画布中心点坐标
        this.constant.centerPos.left = halfStageW - halfImageW;
        this.constant.centerPos.top = halfStageH - halfImageH;

        //计算左两侧区域的x取值范围
        this.constant.hPosRange.leftSecX[0] = -halfImageW;
        this.constant.hPosRange.leftSecX[1] = halfStageW - halfImageW * 3;
        //计算右侧区域x的取值范围
        this.constant.hPosRange.rightSecX[0] = halfStageW + halfImageW;
        this.constant.hPosRange.rightSecX[1] = stageW - halfImageW;
        //计算左右两侧区域Y的取值范围
        this.constant.hPosRange.y[0] = -halfImageH;
        this.constant.hPosRange.y[1] = stageH - halfImageH;

        //计算上侧区域y的取值范围
        this.constant.vPosRange.topY[0] = -halfImageH;
        this.constant.vPosRange.topY[1] = halfStageH - halfImageH * 3;
        //计算上侧区域x的取值范围
        this.constant.vPosRange.x[0] = -halfStageW;
        this.constant.vPosRange.x[1] = halfStageW;

        this.rearrange(0);
    }

    rearrange(centerIndex) {
        let imgsArrangeArr = this.state.imgsArrangeArr,
            constant = this.constant,
            centerPos = constant.centerPos,
            hPosRange = constant.hPosRange,
            vPosRange = constant.vPosRange,
            //左右两侧区域x,y的取值范围
            hPosRangeLeftSecX = hPosRange.leftSecX,
            hPosRangeRightSecX = hPosRange.rightSecX,
            hPosRangeY = hPosRange.y,
            //上侧区域x,y的取值范围
            vPosRangeTopY = vPosRange.topY,
            vPosRangeX = vPosRange.x,

            //用以存储上侧图片的状态信息
            imgsArrangeTopArr = [];
        let topImgNum = Math.floor(Math.random() * 2);//取一个或者不取,Math.floor()向下取整
        let topImgSpliceIndex = 0;//上侧图片是数组中的哪一个，初始化为0

        let imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);//中心图片的状态信息

        //首先居中centerIndex的图片
        imgsArrangeCenterArr[0] = {
            pos: centerPos,
            rotate: 0,
            isCenter: true
        }
        //居中的图片不旋转
        imgsArrangeCenterArr[0].rotate = 0;

        //取出要布局上侧图片索引  取上侧图片的状态信息
        topImgSpliceIndex = Math.ceil(Math.random(imgsArrangeArr.length - topImgNum));
        imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
        // 布局上侧的图片
        imgsArrangeTopArr.forEach(function (value, index) {
            imgsArrangeTopArr[index] = {
                pos: {
                    top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                    left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
                },
                rotate: get30degRandom(),
                isCenter: false
            }
        })


        //布局左右两侧的图片
        for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
            let hPosRangeLorRX = null;
            //前半部分布局左边，右半部分布局右边
            if (i < k) {
                hPosRangeLorRX = hPosRangeLeftSecX;
            } else {
                hPosRangeLorRX = hPosRangeRightSecX;
            }
            imgsArrangeArr[i] = {
                pos: {
                    top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                    left: getRangeRandom(hPosRangeLorRX[0], hPosRangeLorRX[1])
                },
                rotate: get30degRandom(),
                isCenter: false
            }
        }

        //把top元素插回到原来的数组中
        if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
            imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
        }
        //把中间区域的图片元素插回原来的数组
        imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

        //设置state触发component的重新渲染
        this.setState({
            imgsArrangeArr: imgsArrangeArr
        });
    }

    render() {
        

        let imageSqures = [];
        imgSum.forEach((img, index) => {
            if (!this.state.imgsArrangeArr[index]) {
                this.state.imgsArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    },
                    rotate: 0,
                    inInverse: false,
                    isCenter: false
                }
            }
            imageSqures.push(<ImageSqure data={img} key={index} ref={`imageSqure${index}`}
                arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>)
        })
        return (
            <section className={styles.stage} ref="stage">
                <section className={styles.imageSection}>
                    {imageSqures}
                </section>
                <nav className={styles.imageNav}>
                    nav bar
                </nav>
            </section>
        )
    }
}
export default Gallery;