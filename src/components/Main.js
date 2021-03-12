import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic09.jpeg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic08.png'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import pic08 from '../images/pic03.png'
import pic09 from '../images/pic10.png'

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            ></div>
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
            >
                <article
                    id="intro"
                    className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Intro</h2>
                    <span className="image main">
                        <img src={pic01} alt="" />
                    </span>
                    <p>This is my portfolio site created with Gatsby.js.<br />
                    Gatsby.jsで作成したポートフォリオサイトです。</p>
                    <p>The background image was created using Fusion 360.<br />
                    背景の画像はFusion 360を使用して作成しました。</p>
                    {close}
                </article>

                <article
                    id="work"
                    className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Work</h2>
                    <a
                        href="https://dadada-4bded.web.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        da da da !!!
                    </a>
                    <span className="image main">
                        <a
                            href="https://dadada-4bded.web.app/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={pic02} alt="" />
                        </a>
                    </span>
                    <p>da da da !!!は初学者のためのタイピングゲームです。</p>
                    <br />

                    <a
                        href="https://tacosman769.github.io/my-site/"
                        target="_blank"
                        rel="noopener"
                    >
                        MY SETUP DETAILS
                    </a>
                    <span className="image main">
                        <a
                            href="https://tacosman769.github.io/mysetup/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={pic09} alt="" />
                        </a>
                    </span>
                    <p>私のデスクセットアップの紹介</p>
                    <br />

                    <a
                        href="https://tacosman769.github.io/my-site/"
                        target="_blank"
                        rel="noopener"
                    >
                        my site
                    </a>
                    <span className="image main">
                        <a
                            href="https://tacosman769.github.io/my-site/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={pic06} alt="" />
                        </a>
                    </span>
                    <p>初めて作成した自分のwebサイト。</p>
                    <br />

                    <a
                        href="https://tacosman769.github.io/a-frame-test/"
                        target="_blank"
                        rel="noopener"
                    >
                        gltf-view
                    </a>
                    <span className="image main">
                        <a
                            href="https://tacosman769.github.io/a-frame-test/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={pic07} alt="" />
                        </a>
                    </span>
                    <p>htmlでgltfを扱う。</p>
                    <br />

                    <a
                        href="https://todo-70a78.web.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        firebase message
                    </a>
                    <span className="image main">
                        <a
                            href="https://todo-70a78.web.app/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={pic05} alt="" />
                        </a>

                    </span>
                    <p>da da da !!!でRealtimeDatabaseを扱うための練習。</p>
                    {close}
                </article>

                <article
                    id="about"
                    className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">About</h2>
                    <h3>tacosman / Shun Fujita</h3>
                    <span className="image main">
                        <img src={pic03} alt="" />
                    </span>
                    <p>フロントエンドエンジニアになるために日々勉強しています。<br />
                    趣味でモデリングもしています。</p>
                    <h2 className="major">Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript (jQuery / React / Gatsby)</li>
                    </ul>
                    <h2 className="major">Basic Knowledge</h2>
                    <ul>
                        <li>Programming Language (C / Java)</li>
                        <li>Database (NoSQL / MySQL)</li>
                        <li>Cloud (Firebase / Netlify / Azure)</li>
                        <li>Linux / CentOS</li>
                        <li>blender / Fusion360</li>
                    </ul>
                    <h2 className="major">Education</h2>
                    <ul>
                        <li>日本工学院専門学校ITカレッジ情報処理科 (2019/04 ~ 2021/03)</li>
                    </ul>
                    {close}
                </article>

                <article
                    id="contact"
                    className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Contact</h2>
                    <span className="image main">
                        <img src={pic08} alt="" />
                    </span>
                    <a href="mailto:tacosman769@gmail.com">tacosman769@gmail.com</a>
                    <ul className="icons">
                        <li>
                            <a
                                href="https://twitter.com/fu_takos_"
                                className="icon fa-twitter"
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/taco_sman/"
                                className="icon fa-instagram"
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tacosman769"
                                className="icon fa-github"
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                    </ul>
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
