import React from 'react';

import CatPlanet from '../../public/images/cat_planet.svg';

import style from './style.module.scss';

const Main = () => {
  const RoadmapItem = () => (
    <div className={style.roadmapItem}>
      <div>
        <div className={style.point} />
      </div>
      <div className={style.time}>
        <span className={style.year}>2022</span>
        <span className={style.date}>11/15</span>
      </div>
      <div className={style.milestone}>
        <span className={style.goal}>發行1000個 喵嗚 NFT,購買即獲得活動門票</span>
        <span className={style.subGoal}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
          faucibus mauris,mauris ornare.Sagquam.
        </span>
      </div>
    </div>
  );

  const TeamItem = () => (
    <div className={style.teamCat}>
      <div className={style.position}>
        <div className={style.profile}>
          <div className={style.avatar} />
          <div className={style.info}>
            <span className={style.name}>NameName</span>
            <span className={style.subTitle}>subtitle</span>
            <span className={style.content}>Level up on everything you need to know about 8pt grids, baseline grids, and</span>
            <div className={style.socialMedia}>
              <img className={style.icon} src='icon/icon_twitter.svg' alt="twitter logo" />
              <img src='icon/icon_discord.svg' alt="discord logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={style.mainPage}>
      <div className={style.container}>
        <div className={style.leading}>
          <div className={style.logoSection}>
            <img className={style.logo} src='images/logo_cat.svg' alt="logo cat" />
            <div className={style.mint}>Mint</div>
          </div>
          <div className={style.dotsSection}>
            <div className={style.dot} />
            <div className={style.dot} />
            <div className={style.dot} />
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.story}>
          <div className={style.storyText}>
            <div className={style.title}>Story</div>
            <span className={style.content}>
              在遙遠的宇宙，存在一個神奇的貓貓星球
              為慶祝貓貓星球建國70周年，貓貓星球的國王—玉皇大喵
              決定舉辦一場盛大的宴會，並賞賜最時尚的貓國人數不盡的貓罐頭
              貓國人無不渾身解數，把自己的傳家寶都拿了出來
              我們的主人公—醉醉貓，決定搭火箭前往地球尋找新的機緣
              快來幫助醉醉貓成為最時尚的貓國人吧~
            </span>
            <div className={style.btnSection}>
              <div className={style.btn}>Skip</div>
              <div className={style.btn}>Next</div>
            </div>
          </div>
          <div className={style.storyImg}>
            <img className={style.storyCat} src="images/story_ufocat.svg" alt="ufo cat" />
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.mintCat}>
          <img className={style.mintImg} src="images/mint_catbg.svg" alt="mint cat" />
          <div className={style.mint}>Mint</div>
        </div>
      </div>
      <div className={style.plant}>
        <div className={style.container}>
          <div className={style.planContent}>
            <div className={style.title}>發行計畫</div>
            <div className={style.content}>
              地球各處散落著各種不同的時尚單品，有傳聞說，玉皇大喵Ⅱ世曾穿戴的飾品、禮服
              也被不名人士帶到了地球，好稀有。快幫助醉醉貓收集飾品，成為時尚達人吧
            </div>
          </div>
          <img className={style.catPlanetImg} src="images/cat_planet.svg" alt="cat planet" />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.roadmap}>
          <div className={style.roadmapText}>
            <span className={style.title}>Roadmap</span>
            <div className={style.content}>
              <p>喵嗚的Diary</p>
              <p>記錄著喵嗚在地球的驚心歷險記</p>
              <p>和成為時尚王背後不為人知的辛酸路程</p>
            </div>
          </div>
          <div className={style.map}>
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
          </div>
        </div>
      </div>
        <div className={style.team}>
          <div className={style.container}>
            <span className={style.title}>Team</span>
            <div className={style.teamGroup}>
              <TeamItem />
              <TeamItem />
              <TeamItem />
            </div>
          </div>
      </div>
      <div className={style.container}>
        <div className={style.faq}>
          <h1 className={style.faqTitle}>FAQ</h1>
          <div className={style.loremIpsum}>
            <div className={style.rightDot}>
              <div className={style.borderDot}></div>
              <div className={style.borderDot2}></div>
              <div className={style.borderDot3}></div>
            </div>
            <div className={style.loremRight}>
              <div className={style.rightText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.rightText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.rightText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.rightText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.rightText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
            </div>
            <div className={style.leftDot}>
              <div className={style.borderDot}></div>
              <div className={style.borderDot2}></div>
              <div className={style.borderDot3}></div>
            </div>
            <div className={style.loremleft}>
              <div className={style.leftText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.leftText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.leftText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.leftText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
              <div className={style.leftText}>
                <div className={style.textTitle}>lorem ipsum</div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquet vei mi
                faucibus mauris,mauris ornare.Sagquam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.newsletter}>
          <div className={style.letterSection}>
            <div className={style.title}>NEWSLETTER</div>
              <div className={style.content}>
                Subscribe to our newsletter for exclusive drops, perks, events & more
              </div>
            <div className={style.email}>
              <input className={style.input} type="text" placeholder="your email address..." />
              <button className={style.btn}>Subscribe</button>
            </div>
          </div>
          <div className={style.follow}>
            <div className={style.title}>Follow us</div>
            <div className={style.socialMedia}>
              <div className={style.followIcon}>
                <img src="icon/icon_follow_discord.svg" alt="discord icon" />
              </div>
              <div className={style.followIcon}>
                <img src="icon/icon_follow_twitter.svg" alt="twitter icon" />
              </div>
              <div className={style.followIcon}>
                <img src="icon/icon_follow_instagram.svg" alt="instagram icon" />
              </div>
              <div className={style.followIcon}>
                <img src="icon/icon_follow_youtube.svg" alt="youtube icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.footer}>
          <div className={style.leftSection}>
              <div className={style.title}>Tipsy Cat</div>
              <span className={style.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vel mi faucibus mauris, mauris ornare. 
                Sagittis ultrices nisl cras ut sit adipiscing.
              </span>
          </div>
          <div className={style.rightSection}>
            <div className={style.group}>
              <div className={style.title}>Explore</div>
              <div className={style.item}>All Nft</div>
              <div className={style.item}>Season Nft</div>
              <div className={style.item}>Combine Nft</div>
            </div>
            <div className={style.group}>
              <div className={style.title}>About us</div>
              <div className={style.item}>story</div>
              <div className={style.item}>Roadmap</div>
              <div className={style.item}>Team</div>
              <div className={style.item}>FAQ</div>
            </div>
            <div className={style.group}>
              <div className={style.title}>Profile</div>
              <div className={style.item}>Profile</div>
              <div className={style.item}>collection</div>
              <div className={style.item}>Activity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
