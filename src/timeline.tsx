import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function OppositeContentTimeline() {


    // item用配列
    let itemc: string[] = [];
    itemc.push("a");
    itemc.push("b");
    itemc.push("c");


    return (
        <React.Fragment>
            <Timeline align="alternate">
                {itemc.map((item) => (
                    // クリップボードに送るライブラリを呼ぶ
                    <CopyToClipboard text={item}>
                        <TimelineItem >
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">09:30 am</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography >{item}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </CopyToClipboard>
                ))}
                {/* 
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">09:30 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Eat</Typography>
                    </TimelineContent>
                </TimelineItem> 
                */}

            </Timeline>
        </React.Fragment>
    );
}
