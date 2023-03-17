import Questionnaire from '@/components/Questionnaire'
import classes from '@/styles/questionnaireGroup.module.css'

const QuestionnaireGroup = (props) => {
    return (
        <div className={classes.container}>
            {
                props.questionnaires?.map(question => <Questionnaire key={question.id} closed_at={question.closed_at} author={question.author} title={question.title} isPriority={question.isPriority} />)
            }
        </div>
    )
}

export default QuestionnaireGroup