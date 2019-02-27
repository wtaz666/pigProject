import React, { Component } from 'react'
import { Input, Select, DatePicker, Button } from 'antd';
import style from './schedule.css';

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            pigData: [{
                number: 'MZ1001',
                state: '代配种',
                btnCon: '待执行'
            },{
                number: 'MZ1002',
                state: '代配种',
                btnCon: '已逾期'
            },{
                number: 'MZ1003',
                state: '分娩',
                btnCon: '已逾期'
            },{
                number: 'MZ1004',
                state: '待断奶',
                btnCon: '已逾期'
            }]
        };
    }
    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }
    render () {
        const Option = Select.Option;
        let {startValue, endValue, endOpen, pigData} = this.state;
        return (
            <div className={style.content}>
                <div className={style.pigMsg}>
                    <dl className={style.pigMsgHeight}>
                        <dt>母猪耳号：</dt>
                        <dd><Input /></dd>
                    </dl>
                    <dl className={style.pigMsgHeight}>
                        <dt>类型：</dt>
                        <dd><Select
                                showSearch
                                style={{ width: 246 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="全部">全部</Option>
                                <Option value="200斤以下">200斤以下</Option>
                                <Option value="200斤以上">200斤以下</Option>
                            </Select></dd>
                    </dl>
                    <div className={style.choseTime}>
                        <span className={style.timeStart}>起：</span>
                        <div>
                            <DatePicker
                                style={{ width: 80 }}
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                        </div>
                        <span className={style.timeEnd}>止：</span>
                        <div>
                            <DatePicker
                                style={{ width: 80 }}
                                disabledDate={this.disabledEndDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={endValue}
                                placeholder="End"
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        </div>
                        <Button className={style.searchBtn}>查询</Button>
                    </div>
                </div>
                {
                    pigData.length && pigData.map((val, ind) => {
                        return <div className={style.errNum} key={ind}>
                            <div className={style.errNumLeft}>
                                <p>母猪耳号：{val.number}</p>
                                <p>猪只状态：{val.state}</p>
                            </div>
                            <div className={style.errNUmRight}>
                                <Button className={val.btnCon === '待执行' ? style.blue : style.red}>{val.btnCon}</Button>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default componentName