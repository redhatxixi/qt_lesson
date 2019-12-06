import * as React from 'react'
import {Header, About} from './components'

export const App: React.StatelessComponent<{}> = () => {
    return(
        <div className="container-fluif">
            <Header />
            <About />
        </div>
    )
}