import styles from './Button.module.scss'
import React from 'react'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

console.log(cx('button', 'loading'))

class Button extends React.Component{

  
  state = {
    loading: false
  };
  
  render(){
    console.log(classNames('foo','bar'))
    const {loading} = this.state;
    return  <button onClick={this.stateLoading} className={cx("button",{loading})} {... this.props}></button>
  }
  stateLoading = () =>{
    this.setState({
      loading: true
    })
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    },1000)
  }
}
export default Button;