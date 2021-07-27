import * as React from 'react';
import './Pads.scss';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Pad from './Pad';

export default function Pads() {
    return (
        <div className="pads">
            <div className="pads__row-1">
                <div className="pads__row-1-el-1 pad__none"></div>
                <div className="pads__row-1-el-2 pad__arrow"></div>
                <div className="pads__row-1-el-3 pad__none"></div>
            </div>
            <div className="pads__row-2">
                <Pad name={'ii'} />
                <div className="pad__arrow pad__arrow-down pad__arrow--active"><ArrowDownwardIcon /></div>
                <Pad name={'iii'} />
                <div className="pad__arrow pad__arrow-down pad__arrow--active"><ArrowDownwardIcon /></div>
                <Pad name={'IV'} />
                <div className="pad__arrow pad__arrow-down"><ArrowDownwardIcon /></div>
                <Pad name={'V'} />
                <div className="pad__arrow pad__arrow-down"><ArrowDownwardIcon /></div>
                <Pad name={'I'} />
            </div>
            <div className="pads__row-3">
                <div className="pads__row-2-el-1 pad__none"></div>
                <div className="pad__arrow-right"><CallReceivedIcon /></div>
                <div className="pad__arrow-left"><CallReceivedIcon /></div>
                <div className="pad__arrow-right pad__arrow--active"><CallReceivedIcon /></div>
                <div className="pad__arrow-left"><CallReceivedIcon /></div>
                <div className="pad__arrow-right"><CallReceivedIcon /></div>
                <div className="pad__arrow-left"><CallReceivedIcon /></div>
                <div className="pads__row-3-el-7 pad__none"></div>
            </div>
            <div className="pads__row-4">
                <div className="pads__row-2-el-1 pad__none"></div>
                <Pad name={'V'} />
                <div className="pad__arrow pad__arrow-down"><ArrowDownwardIcon /></div>
                <Pad name={'vi'} />
                <div className="pad__arrow pad__arrow-down"><ArrowDownwardIcon /></div>
                <Pad name={'ii'} />
                <div className="pads__row-4-el-6 pad__none"></div>
            </div>
        </div>
    );
}