import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            //   maxHeight: 300,
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
    }),
);

export default function PinnedSubheaderList() {


    const classes = useStyles();

    // ヘッダー用配列
    let items: string[] = [];
    items.push("通常");
    items.push("有利");

    // item用配列
    let itemc: string[] = [];
    itemc.push("a");
    itemc.push("b");
    itemc.push("c");

    // handleClick is ここでclickイベントにはなる
    const handleClick = (v: string) => {
        itemc.push(v);
        console.log("handleClick");
        console.log(v);
    };

    return (
        // 見た目はこれでいいからclickイベントつけよ
        <div>

            <List className={classes.root} subheader={<li />}>
                {/* 配列の中身を展開する */}
                {items.map((sectionId) => (
                    <li key={`section-${sectionId}`} className={classes.listSection}>
                        <ul className={classes.ul}>
                            <ListSubheader>{`${sectionId}区間`}</ListSubheader>
                            {itemc.map((item) => (
                                // クリップボードに送るライブラリを呼ぶ
                                <CopyToClipboard text={item}>
                                    <ListItem button
                                        key={`item-${sectionId}-${item}`}
                                        onClick={() => handleClick(item)}
                                    >
                                        <ListItemText primary={`Item ${item}`} />
                                        {/* それっぽいアイコンを表示 */}
                                        <AssignmentIcon />

                                    </ListItem>
                                </CopyToClipboard>
                            ))}

                        </ul>
                    </li>
                ))}
            </List>


        </div>

    );
}
