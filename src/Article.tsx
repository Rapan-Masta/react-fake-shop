import classes from './Article.module.scss'

console.log(classes)

type Props = {
    title: string
    description: string
    author: string
}
const Article = (props: Props) => {
    return (
        <div>
            <h2 className={classes['article-title']}>{props.title}</h2>
            <p>{props.description}</p>
            <p>Author: {props.author}</p>
        </div>
    )
}
export default Article
