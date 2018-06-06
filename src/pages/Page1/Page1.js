import React,{Component} from 'react';
import './Page1.css';
import images from './images/fruit.jpg';

export default class Page1 extends Component{
    render(){
        return(
            <div className="page1">
                this is page1 ~<br/>
                <img src={images} />
            </div>
        )
    }
}