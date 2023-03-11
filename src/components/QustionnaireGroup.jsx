import Questionnaire from '@/components/Questionnaire'
import classes from '@/styles/questionnaireGroup.module.css'

const QuestionnaireGroup = () => {
    return (
        <div className={classes.container}>
            <Questionnaire isPriority={true}/>
            <Questionnaire isPriority={true}/>
        </div>
    )
}

export default QuestionnaireGroup