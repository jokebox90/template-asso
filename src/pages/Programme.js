// src/pages/Programme.js

import Main from "../layouts/Main";
import { Article } from "../components/Article";
import { Heading } from "../components/Heading";
import { Content } from "../components/Content";
import {
  Hero,
  HeroContent,
  HeroImage,
  HeroText,
  HeroTitle,
} from "../components/Hero";
import { Card, CardButton, CardText, CardTitle } from "../components/Card";
import photoHero from "../images/photo-hero.jpg";
import musicPlayer1 from "../images/music-player1.jpg";
import musicPlayer2 from "../images/music-player2.jpg";
import musicPlayer3 from "../images/music-player3.jpg";
import { Menu } from "./Menu";

const Programme = () => {
  return (
    <Main>
      <Hero bgImage="" bgColor="dark" textColor="light" hasNavBottom>
        <HeroContent>
          <HeroTitle name="map">Programme</HeroTitle>
          <HeroText>
            Dolore nostrud dolore ex rebum dolor lorem magna est dolore sed
            volutpat suscipit consectetuer autem voluptua gubergren stet. At sit
            justo lorem eos soluta diam gubergren vel est erat. Facilisi amet
            placerat ut aliquip ipsum amet.
          </HeroText>
        </HeroContent>
        <HeroImage src={photoHero} />
      </Hero>

      <Menu navProps={{ large: true }} />

      <Article>
        <Heading name="map" heading="h2" title="Programme">
          Eos at enim consetetur dolor sed at eu. Diam et nonumy sea delenit
          diam gubergren et gubergren tempor volutpat. Zzril et illum nonumy
          elitr elitr erat no dolor clita sanctus dolore duo diam et lorem erat.
          Lorem elit duo lorem nibh sadipscing invidunt liber euismod labore
          elitr sadipscing dolor quis ullamcorper. Et mazim labore est est duo
          stet facilisi consetetur lorem.
        </Heading>
        <Content cols="2">
          <Card row image={musicPlayer1}>
            <CardTitle>Dates d'inscription</CardTitle>
            <CardText>
              At diam sea sea voluptua dolor magna sit nostrud et at erat.
              Facilisis feugiat sit labore et et magna rebum gubergren aliquyam
              clita vero vero amet. Et sit erat voluptua sanctus diam dolores
              wisi invidunt ullamcorper et voluptua elitr.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>

          <Card row image={musicPlayer2}>
            <CardTitle>Premier trimestre</CardTitle>
            <CardText>
              Sed at clita accusam elitr invidunt sit dolores no sed dolor.
              Dolore justo no. Et minim lorem et eirmod exerci sit ipsum
              consectetuer lorem. Magna et wisi tincidunt et sadipscing
              volutpat.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>

          <Card row image={musicPlayer3}>
            <CardTitle>été</CardTitle>
            <CardText>
              In delenit ut autem volutpat ipsum iusto eos nisl et eirmod vero
              sea eos dolore nulla ipsum accusam sea. Dolor eirmod velit nonumy
              et lorem vel labore tempor velit erat in feugiat tempor consetetur
              cum.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>

          <Card row image={musicPlayer3}>
            <CardTitle>Automne</CardTitle>
            <CardText>
              In delenit ut autem volutpat ipsum iusto eos nisl et eirmod vero
              sea eos dolore nulla ipsum accusam sea. Dolor eirmod velit nonumy
              et lorem vel labore tempor velit erat in feugiat tempor consetetur
              cum.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>

          <Card row image={musicPlayer3}>
            <CardTitle>Hiver</CardTitle>
            <CardText>
              In delenit ut autem volutpat ipsum iusto eos nisl et eirmod vero
              sea eos dolore nulla ipsum accusam sea. Dolor eirmod velit nonumy
              et lorem vel labore tempor velit erat in feugiat tempor consetetur
              cum.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>
        </Content>
      </Article>
    </Main>
  );
};

export default Programme;
