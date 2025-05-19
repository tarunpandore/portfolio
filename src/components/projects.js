import { Component } from 'react'
import '../components/css/project.css'

export class projects extends Component {
    render(props) {
        const name = this.props.name;
        const icon = this.props.icon;
        const gitlink = this.props.gitlink;
        return (
            <div className="projects">
                <a href={gitlink} target='_blank' rel="noopener noreferrer">
                    <img src={icon} alt="/icon" className='project-icon' />
                </a>
                <h3 className="project-name">{name}</h3>
            </div>
        )
    }
}

export default projects