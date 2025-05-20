import { Component } from 'react'
import '../components/css/home.css'
import folder from '../assets/folder.png'
import folderDark from '../assets/folder_dark.png'
import about from '../assets/about.png'
import aboutDark from '../assets/about_dark.png'
import github from '../assets/github.png'
import githubDark from '../assets/github_dark.png'
import theme from '../assets/theme.png'
import themeDark from '../assets/theme_dark.png'
import TimeDisplay from '../data/date_time'
import Window from './window'

function getCurrentDate() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}

function getCurrentDay() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
  };
  return date.toLocaleDateString('en-US', options);
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: true,
      showWindow: props.showWindow || false,
      windowTitle: "", // Add this line
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleShowWindowChange = this.handleShowWindowChange.bind(this);
  }

  handleShowWindowChange(value) {
    this.setState({ showWindow: value });
  }

  toggleTheme() {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme
    }));
  }

  handleOpenWindow = (title) => {
    this.setState({ showWindow: true, windowTitle: title });
  };

  render() {
    const { darkTheme, showWindow, windowTitle } = this.state;

    let folderImg = darkTheme ? folderDark : folder;
    let aboutImg = darkTheme ? aboutDark : about;
    let githubImg = darkTheme ? githubDark : github;
    let themeImg = darkTheme ? themeDark : theme;

    const textColor = darkTheme ? '#f0f0e4' : '#111111';
    const backgroundColor = darkTheme ? '#111111' : '#f0f0e4';

    return (
      <>
      <header style={{ backgroundColor: backgroundColor, color: textColor }}>
        <h1 style={{ backgroundColor: backgroundColor, color: textColor }}>tn/jnr</h1>
        <span className='mobile'>
        <h3 className='separator' style={{ color: textColor }}>
          <img src={themeImg} alt="/github" className='gitlink' onClick={this.toggleTheme} style={{ cursor: 'pointer' }} />
          /
          <a
          href="https://github.com/tarunpandore"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={githubImg} alt="/github" className='gitlink' />
          </a>
        </h3>
        </span>
        <input
        type="text"
        name='name'
        placeholder="What's your name?"
        className='contact'
        style={{
          backgroundColor: darkTheme ? '#1f1f1f' : '#e7e5d9',
          color: textColor,
          border: darkTheme ? '2px solid #383838' : '2px solid #d9d7cb'
        }}
        />
        <span className="left">
        <span className="date_time">
          <TimeDisplay style={{ color: textColor }} />
          <h5 style={{ color: textColor }}>{getCurrentDay()} {getCurrentDate()}</h5>
        </span>
        <h3 className='separator' style={{ color: textColor }}>
          <img src={themeImg} alt="/github" className='gitlink' onClick={this.toggleTheme} style={{ cursor: 'pointer' }} />
          /
          <a
          href="https://github.com/tarunpandore"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={githubImg} alt="/github" className='gitlink' />
          </a>
        </h3>
        </span>
      </header>
      <main style={{ backgroundColor: backgroundColor, color: textColor }}>
        {showWindow && (
          <Window
            darkTheme={darkTheme}
            closeWindow={() => this.setState({ showWindow: false })}
            title={windowTitle} // Pass the title prop
          />
        )}
        <section className="files">
          <span className='options'>
            <span
              className="opt"
              onClick={() => this.handleOpenWindow("Projects")}
            >
              <img src={folderImg} alt="folder" className='folder' />
              <h3 style={{ color: textColor }} className='tit'>Projects</h3>
            </span>
            <span
              className="opt"
              onClick={() => this.handleOpenWindow("Skills")}
            >
              <img src={folderImg} alt="folder" className='folder' />
              <h3 style={{ color: textColor }} className='tit'>Skills</h3>
            </span>
          </span>
          <section className="foot">
            <span className="about">
            <p style={{ color: textColor }}>About Me</p>
            <img src={aboutImg} alt="/about" className='abticon' />
            </span>
          </section>
        </section>
        <section className="aboutMe">
        <h4 style={{ color: textColor }}>HI STRANGER,</h4>
        <p className='title' style={{ color: textColor }}> I am Tarun
          <br />
          Software Dev.
        </p>
        <p style={{ color: textColor }} className='desc'>
          I mix logic with a touch of creativity,
          <br />
          turn ideas into digital experiences,
          <br />
          and break things... just to fix them.
        </p>

        <section className="footer">
          <span className="socials">
          <p style={{ color: textColor }}>Socials</p>
          <a href="https://www.linkedin.com/in/tarunpandore"
            target="_blank"
            rel='noopener noreferrer'>
            <h3 style={{ color: textColor }}>LINKEDIN</h3>
          </a>
          <h3 style={{ color: textColor }}>DISCORD</h3>
          </span>
          <span className="getInTouch">
          <p style={{ color: textColor }}>Get in Touch</p>
          <h4 style={{ color: textColor }}>TARUNPANDORE8@GMAIL.COM</h4>
          <h4 style={{ color: textColor }}>+91 9811389881</h4>
          </span>
          <span className="copyright">
          <p style={{ color: textColor }}>© 2025, Tarun. Design by vikers.</p>
          <p style={{ color: textColor }}>*Note: This Design is a refernce from Dribble.</p>
          </span>
        </section>
        </section>
      </main>
      <footer style={{ backgroundColor: backgroundColor, color: textColor }}>
        <p style={{ color: textColor }}>© 2025, Tarun. Design by vikers.</p>
        <p style={{ color: textColor }}>*Note: This Design is a refernce from Dribble.</p>
      </footer>
      </>
    )
  }
}
