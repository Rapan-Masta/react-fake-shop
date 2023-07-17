import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Article from './Article'

// //without JSX
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// //JSX
// const h1 = <h1 id="title-2">Hello React.js</h1>

// const contentBlock1 = (
//     <div>
//         <p>Text 1</p>
//         <p>Text 2</p>
//         <p>Text 3</p>
//     </div>
// )

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, molestias dignissimos facere distinctio incidunt
                voluptatibus cumque inventore assumenda adipisci vel similique
                aut obcaecati? Qui nihil consectetur officia, quidem doloribus
                doloremque?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, molestias dignissimos facere distinctio incidunt
                voluptatibus cumque inventore assumenda adipisci vel similique
                aut obcaecati? Qui nihil consectetur officia, quidem doloribus
                doloremque?
            </p>
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header title="KEKES" year={2007} />
            <Content />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <Article
            title="KEKES"
            description="lorem kekekekkekekeks"
            author="Monkey"
        />
        <Article
            title="HEHES"
            description="lorem blalalalalalala"
            author="Chess"
        />
    </React.StrictMode>
)
