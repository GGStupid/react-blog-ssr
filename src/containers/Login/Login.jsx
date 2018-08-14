import React, { Component } from 'react';
import './Login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import logo from '../../logo.svg'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '登录'
    }
  }
  handleSubmit (e) {
    console.log(e)
  }
  handleReset = () => {
    this.props.form.resetFields()
  }
  render () {
    const FormItem = Form.Item
    const { getFieldDecorator, resetFields } = this.props.form
    const { title } = this.state

    return (
      <div className="login-wrap">
        <img className="login-logo-icon" src={logo} alt="icon" />
        <h2 className="login-title">{title}</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
          </FormItem>
          <FormItem>
            <span onClick={this.handleReset}>重置</span>
            <span className="login-form-forgot" href="">注册</span>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Login);