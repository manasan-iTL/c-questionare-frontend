
import Tab from "@/components/Tab.jsx"
import classes from "@/styles/tabGroup.module.css"

const TAB_TITLE = [
    "アンケート一覧",
    "アンケート投稿",
    "イベント掲示板",
    "お問い合わせ"
]

const TabGroup = () => {
    return (
        <div className={classes.tab_container}>
           { TAB_TITLE.map(tab => <Tab text={tab} key={tab}/>) }
        </div>
    )
}

export default TabGroup