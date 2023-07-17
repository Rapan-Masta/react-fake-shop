type Props = {
    title: string
    description: string
    author: string
}
const Article = (props: Props) => {
    return (
        <div>
            <h2
                style={{
                    backgroundColor: 'purple',
                    color: 'white',
                    padding: '15px',
                }}
            >
                {props.title}
            </h2>
            <p>{props.description}</p>
            <p>Author: {props.author}</p>
        </div>
    )
}
export default Article
