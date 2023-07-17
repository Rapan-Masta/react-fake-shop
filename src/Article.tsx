import './Article.css'

type Props = {
    title: string
    description: string
    author: string
}
const Article = (props: Props) => {
    return (
        <div>
            <h2 className="article-title">{props.title}</h2>
            <p>{props.description}</p>
            <p>Author: {props.author}</p>
        </div>
    )
}
export default Article
