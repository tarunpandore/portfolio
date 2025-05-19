import { Component } from 'react'
import '../components/css/skills.css'

export class skills extends Component {
    render() {
        const skills = [
            { name: 'React', level: 'Intermediate' },
            { name: 'JavaScript', level: 'Intermediate' },
            { name: 'Flutter', level: 'Intermediate' },
            { name: 'Java', level: 'Intermediate' },
            { name: 'Git', level: 'Intermediate' },
            { name: 'HTML', level: 'Intermediate' }
        ];
        const darkTheme = this.props.darkTheme;
        const textColor = darkTheme ? '#f0f0e4' : '#111111';
        const backgroundColor = darkTheme ? '#111111' : '#f0f0e4';
        const bodyColor = darkTheme ? '#1f1f1f' : '#e7e5d9';
        const cardColor = darkTheme ? '#111' : '#fff';


        return (
            <div
                className="skills"
                style={{ color: textColor, backgroundColor: backgroundColor }}
            >
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div key={skill.name} className="skill-card" style={{ backgroundColor: bodyColor }}>
                            <div className="skill-name" style={{ color: textColor }}>{skill.name}</div>
                            <div className="skill-level">
                                <span className="skill-level-badge" style={{ backgroundColor: cardColor, color: textColor }}>
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default skills