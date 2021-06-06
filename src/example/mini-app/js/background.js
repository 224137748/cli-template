import { canvasH, ctx1, canvasW } from './main';
import bgImage from '../imgs/gameBg.jpg';

export const backgroundObj = function () {
    this.x;
    this.y;
    this.bgPic = new Image(); //游戏背景
    this.bgPic.src = bgImage;
    this.w;
    this.h;
};
backgroundObj.prototype.init = function () {
    this.x = 0;
    this.y = 0;
};
backgroundObj.prototype.draw = function () {
    this.y += 2;
    if (this.y > canvasH) {
        this.y = 0;
    }
    ctx1.drawImage(this.bgPic, 0, this.y, canvasW, canvasH);
    ctx1.drawImage(this.bgPic, 0, this.y - canvasH, canvasW, canvasH);
};

