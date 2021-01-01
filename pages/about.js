import Head from 'next/head'
import Layout from '../components/layout'

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>Rick and Morty</h1>
      <hr/>
      <p>From Wikipedia, the free encyclopedia</p>
      <div className="wikipedia">
        <p>
        Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. <br/><br/>

        Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor. <br/><br/>

        The fourth season premiered on November 10, 2019, and consists of ten episodes. A fifth season was confirmed in July 2020, as part of a long-term deal in May 2018 that ordered 70 new episodes over an unspecified number of seasons.<br/><br/>
        </p>

        <h3>Premise and main characters</h3>
          <p>
          The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.<br/><br/>

          Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family.<br/><br/>

          Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not necessarily apply to every other member of the Smith household. For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving Summer, Beth and Jerry behind.<br/><br/>
          </p>

          <h3>Episodes</h3>
          <p>
          In May 2012, Adult Swim unveiled its development slate that included a Rick and Morty pilot from Harmon and Roiland, which was eventually picked up to series in October 2012, as one of the network's first primetime original shows. The first season premiered in December 2013 and concluded in April 2014. It comprised eleven episodes (including the pilot), and aired Mondays at 10:30 pm ET/PT.<br/><br/>

          Two months earlier, in February 2014, the show had been renewed for a second season, with the press release noting that Rick and Morty consistently outperformed direct competition in its time slot. Season two aired Sundays at 11:30 pm ET/PT, from July to October 2015, and comprised ten episodes. In an interview with The Hollywood Reporter, Roiland said that Rick and Morty will remain "a big priority above anything else" for him in the future, and expressed his intention to keep the show growing.<br/><br/>

          Adult Swim renewed Rick and Morty for a third season in August 2015, shortly after a successful second-season premiere. The two co-creators and executive producers expressed their delight at the series' popularity. The season premiered unannounced on April 1, 2017, as part of an April Fools' prank. The remaining episodes began airing weekly almost four months later, continuing in the same time slot from season two, and the initial airing concluded in October 2017. Although it was originally intended for the season to consist of fourteen episodes, as a result of production delays it eventually comprised only ten.<br/><br/>

          Following the conclusion of the show's third season, co-creators Harmon and Roiland wanted to have assurance that there would be many more seasons of Rick and Morty in the future, so that they would be able to focus on the show and minimize their involvement in other projects. Additionally, Harmon had expressed his wish for the upcoming fourth season to consist of more than ten episodes. In May 2018, after prolonged contract negotiations, Adult Swim announced a long-term deal with the creators, ordering 70 new episodes over an unspecified number of seasons. Roiland was confident that this big renewal deal will allow the creators to minimize the gaps between seasons, as they will be able to schedule their time around the show and "keep the machine going."<br/><br/>

          In May 2019, the fourth season of Rick and Morty was announced to debut in November 2019. The fourth season consisted of ten episodes split across two airings. The first five episodes began airing on November 10, 2019, while the remaining five episodes began airing on May 3, 2020.<br/><br/>
          </p>

      </div>
      <style jsx>{`
        h1 {
          text-align: left;
          font-size: 3rem;
          font-family: sans-serif;
          margin-top: 1%
        }
        h3 {
          text-align: left;
          font-size: 2rem;
          font-family: sans-serif;
          margin-bottom: 1%
        }
        div {
          padding: 2%;
          text-align: justify;
          font-family: sans-serif;
        }
        p {
          font-family: sans-serif;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
