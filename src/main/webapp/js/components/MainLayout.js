import $ from 'jquery';

export default class MainLayout{
    constructor(){
        this.root = $('#root');
        this.resize();
        $(window).resize(this.resize.bind(this));
    }

    resize(){
        this.root.height(this.getHeight()+'px');
        this.root.width(this.getWidth()+'px');
    }

    getWidth(){
        return $(window).width();
    }

    getHeight(){
        return $(window).height();
    }
}
