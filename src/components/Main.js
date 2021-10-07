import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic08.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import pic08 from '../images/pic03.jpg'
import pic09 from '../images/pic10.jpg'

import p1 from '../images/p-01.jpg'
import p2 from '../images/p-02.jpg'
import p3 from '../images/p-03.jpg'
import p4 from '../images/p-04.jpg'
import p5 from '../images/p-05.jpg'
import p6 from '../images/p-06.jpg'
import p7 from '../images/p-07.jpg'
import p8 from '../images/p-08.jpg'
import p9 from '../images/p-09.jpg'
import p10 from '../images/p-10.jpg'
import p11 from '../images/p-11.jpg'
import p12 from '../images/p-12.jpg'
import p13 from '../images/p-13.jpg'
import p14 from '../images/p-14.jpg'
import p15 from '../images/p-15.jpg'
import p16 from '../images/p-16.jpg'
import p17 from '../images/p-17.jpg'
import p18 from '../images/p-18.jpg'
import p19 from '../images/p-19.jpg'


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
                    <h2 className="major">Gallery</h2>
                    <a
                        href="https://vrchat.com/home/world/wrld_18737004-8572-4868-b6ad-bb47bed974d9"
                        target="_blank"
                        rel="noopener"
                    >
                        umi(VRChatのワールド、blender、Unityで作成)
                    </a>
                    <span className="image main">
                        <a
                            href="https://vrchat.com/home/world/wrld_18737004-8572-4868-b6ad-bb47bed974d9"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p15} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://vrchat.com/home/world/wrld_18737004-8572-4868-b6ad-bb47bed974d9"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p7} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://vrchat.com/home/world/wrld_18737004-8572-4868-b6ad-bb47bed974d9"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p8} alt="" />
                        </a>
                    </span>
                    <br />

                    <a
                        href="https://vrchat.com/home/world/wrld_22d76d1c-d0ed-47cc-9625-c2ad95e55e00"
                        target="_blank"
                        rel="noopener"
                    >
                        house(VRChatのワールド、blender、Unityで作成)
                    </a>
                    <span className="image main">
                        <a
                            href="https://vrchat.com/home/world/wrld_22d76d1c-d0ed-47cc-9625-c2ad95e55e00"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p5} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://vrchat.com/home/world/wrld_22d76d1c-d0ed-47cc-9625-c2ad95e55e00"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p6} alt="" />
                        </a>
                    </span>
                    <br />

                    <a
                        href="https://www.instagram.com/p/CSyyIlthZ8q/"
                        target="_blank"
                        rel="noopener"
                    >
                        deltahub.ioとのタイアップ企画
                    </a>
                    <span className="image main">
                        <a
                            href="https://www.instagram.com/p/CSyyIlthZ8q/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p1} alt="" />
                        </a>
                    </span>
                    <br />

                    <a
                        href="https://pbs.twimg.com/media/E2eM_uUUYAgIsjn?format=jpg&name=orig"
                        target="_blank"
                        rel="noopener"
                    >
                        my desksetup
                    </a>
                    <span className="image main">
                        <a
                            href="https://pbs.twimg.com/media/E2eM_uUUYAgIsjn?format=jpg&name=orig"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p3} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://pbs.twimg.com/media/E7sJQVqVkAES2RB?format=jpg&name=orig"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p2} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://pbs.twimg.com/media/EyXPlVoU4AALTNo?format=jpg&name=orig"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p17} alt="" />
                        </a>
                    </span>
                    <br />

                    <a
                        href="https://pbs.twimg.com/media/ExdmD--UUAIXj4-?format=jpg&name=orig"
                        target="_blank"
                        rel="noopener"
                    >
                        自作PC(本格水冷)
                    </a>
                    <span className="image main">
                        <a
                            href="https://pbs.twimg.com/media/ExYCqFNU8Ag0xj8?format=jpg&name=orig"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p18} alt="" />
                        </a>
                    </span>
                    <span className="image main">
                        <a
                            href="https://pbs.twimg.com/media/ExdmD--UUAIXj4-?format=jpg&name=orig"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src={p19} alt="" />
                        </a>
                    </span>
                    <br />

                    <a>趣味のモデリング(blender)</a>
                    <span className="image main">
                        <img src={p4} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p9} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p10} alt="" />

                    </span>
                    <span className="image main">
                        <img src={p11} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p12} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p13} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p14} alt="" />
                    </span>
                    <span className="image main">
                        <img src={p16} alt="" />
                    </span>
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
                    <p>専門学校での卒業制作を通して作成しました。</p>
                    <br />

                    <a
                        href="https://tacosman769.github.io/mysetup/"
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
                    {close}
                </article>

                <article
                    id="about"
                    className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                        }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">About</h2>
                    <h3>Shun Fujita</h3>
                    <span className="image main">
                        <img src={pic03} alt="" />
                    </span>
                    <p>フロントエンドエンジニアになるために日々勉強しています。<br />
                        趣味でモデリング、DIY、写真撮影もしています。</p>
                    <h2 className="major">Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>blender / Fusion360</li>
                    </ul>
                    <h2 className="major">Basic Knowledge</h2>
                    <ul>
                        <li>Programming Language (C / Java)</li>
                        <li>Database (NoSQL / MySQL)</li>
                        <li>Cloud (Firebase / Netlify / Azure)</li>
                        <li>Linux / CentOS</li>
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
                    <a href="mailto:shunfujit@yahoo.co.jp">shunfujit@yahoo.co.jp</a>
                    <ul className="icons">
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
                        <li>
                            <a href="https://www.instagram.com/taco_sman/"
                                className="icon fa-instagram"
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="label">Instagram</span>
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
