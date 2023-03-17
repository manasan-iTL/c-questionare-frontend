import Head from "next/head"
import PostArea from "@/components/PostArea"
import HeadingLabel from "@/components/HeadingLabel"
import QuestionnaireGroup from "@/components/QustionnaireGroup"
import Header from "@/components/Header"
import { useCallback, useEffect, useMemo, useState, useRef } from "react"


const ShowAllQuestionnaires = () => {

    const [questionnaires, setQuestionnaires] = useState([])
    const isFetchFirst = useRef(true)

    const fetchAllQustionnaires = useCallback(async () => {

        const API_ENDPOINT = "http://localhost:3005"

        try {
            const allQustionnaires = await fetch(API_ENDPOINT + "/qustionnaires").then(res => res.json())
            console.log(allQustionnaires)
            setQuestionnaires((prevState) => [...prevState, ...allQustionnaires])
        } catch (error) {
            console.error(error)
        }
    }, [])

    const priorityQustionnaires = useMemo(() => {

        console.log("実行中")

        const priorityQuestions = questionnaires.filter(question => question.isPriority === true)
        const regularQuestions = questionnaires.filter(question => question.isPriority === false)

        console.log(priorityQuestions)
        
        return {
            "priority": priorityQuestions,
            "regular": regularQuestions
        }

    }, [questionnaires])

    useEffect(() => {
        
        if (process.env.NODE_ENV === "development") {
            if (isFetchFirst.current) {
                isFetchFirst.current = false;
              return;
            }
          }
        fetchAllQustionnaires()
    }, [])

    return (
        <>
            <Head>
                <title>アンケート一覧</title>
            </Head>
            <Header />
            <div>
                <PostArea>
                    <HeadingLabel text="優先投稿" isWhite={true}/>
                    <QuestionnaireGroup isPriority={true} questionnaires = { priorityQustionnaires.priority }/>

                    {console.log(priorityQustionnaires)}
                    
                    <HeadingLabel text="通常投稿" isWhite={true}/>
                    <QuestionnaireGroup isPriority={false} questionnaires = { priorityQustionnaires.regular }/>
                </PostArea>
            </div>
        </>
    )
}

export default ShowAllQuestionnaires