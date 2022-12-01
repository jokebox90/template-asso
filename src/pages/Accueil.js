// src/pages/Accueil.js

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

const Accueil = () => {
  return (
    <Main>
      <Hero bgImage="" bgColor="dark" textColor="light">
        <HeroContent>
          <HeroTitle name="music">
            Orchestre Symphonique des Etoiles Factice
          </HeroTitle>
          <HeroText>
            Modèle de pages Web à destination des métiers de l'art et de la
            culture. Les couleurs, les polices et les illustrations sont étudiés
            pour s'adapter au domaine. Les informations et les éléments de
            navigations sont disposés pour mettre en valeur une activité
            particulière avec le maximum de réalisme.
          </HeroText>
        </HeroContent>
        <HeroImage src={photoHero} />
      </Hero>

      <Article>
        <Heading name="calendar" heading="h2" title="Evènements">
          Nonumy dolore accumsan. At minim dolore. Sed et et ipsum diam ex
          lobortis dolore dignissim doming dolore est ipsum consetetur duo.
          Aliquam takimata sadipscing est magna labore dolor amet ea molestie.
          Aliquyam est exerci dolores iusto.
        </Heading>
        <Content cols="3">
          <Card image={musicPlayer1}>
            <CardTitle name="users-line">Concerts</CardTitle>
            <CardText>
              At diam sea sea voluptua dolor magna sit nostrud et at erat.
              Facilisis feugiat sit labore et et magna rebum gubergren aliquyam
              clita vero vero amet. Et sit erat voluptua sanctus diam dolores
              wisi invidunt ullamcorper et voluptua elitr. Nonumy velit dolore
              sed te sadipscing sed kasd autem erat. Sanctus no et esse
              facilisis consequat. Ipsum lorem sed sea ipsum ipsum sanctus
              consetetur ullamcorper labore et gubergren. Sadipscing suscipit
              vulputate est dolor diam rebum rebum sea duo sanctus dolore sit at
              adipiscing no dolor aliquyam at.
            </CardText>
            <CardButton href="#">Lire la suite</CardButton>
          </Card>

          <Card image={musicPlayer2}>
            <CardTitle name="children">Animations</CardTitle>
            <CardText>
              Cum sea no te. At ea et ea consetetur justo et rebum ea et quis
              vero sadipscing tempor lorem justo magna enim. Kasd diam accumsan
              diam dolor nonumy zzril. Ipsum eos sit sit ea ad voluptua sit.
              Amet nulla ea sed ipsum duo erat lorem ipsum.
            </CardText>
            <CardButton href="#">Lire la suite</CardButton>
          </Card>

          <Card image={musicPlayer3}>
            <CardTitle name="face-surprise">Insolites</CardTitle>
            <CardText>
              Et vero eirmod quis lorem et amet eos amet aliquip amet sed et duo
              invidunt et. Nibh facilisi sit et liber amet tempor illum. Justo
              dolor nisl molestie eos et at labore feugait et vel voluptua est
              doming veniam sea consectetuer tincidunt. Consequat augue et esse
              dolor. Sea takimata esse takimata rebum sed aliquam erat tempor ea
              invidunt sit et at vero lorem velit. Praesent nonummy sed velit
              sit voluptua kasd vero hendrerit enim sit consetetur consequat
              feugait eirmod amet. Sit est diam dolore elitr ut.
            </CardText>
            <CardButton href="#">Lire la suite</CardButton>
          </Card>

          <Card image={musicPlayer1}>
            <CardTitle name="comments">Portes-ouvertes</CardTitle>
            <CardText>
              Facilisis takimata diam quod amet diam sed no justo. Suscipit
              labore in clita gubergren voluptua eirmod voluptua sed tation no
              takimata clita duo et. Stet kasd amet ut laoreet kasd ut sit eos
              commodo clita clita nonumy dolor amet aliquam nisl kasd eos.
            </CardText>
            <CardButton href="#">Lire la suite</CardButton>
          </Card>

          <Card image={musicPlayer2}>
            <CardTitle name="fly" collection="brands">
              Voyages
            </CardTitle>
            <CardText>
              Nibh autem amet illum vero praesent dolor lorem aliquyam gubergren
              amet sadipscing et sit erat wisi gubergren sanctus dolore. Ea nibh
              aliquyam duis sit diam stet sit amet. Sed eu lorem amet dolore
              facilisis dignissim et ipsum erat in iusto. Ipsum augue at et
              lorem ea. Dolor sea te et erat ipsum blandit eirmod esse ipsum et
              aliquyam sanctus ea hendrerit. Magna vulputate at consequat
              gubergren sadipscing. Eum no diam luptatum dolore sit accusam est
              labore molestie exerci dolore accusam tempor et.
            </CardText>
            <CardButton name="book" href="#">
              Lire la suite
            </CardButton>
          </Card>
        </Content>
      </Article>

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
          <Card row image={musicPlayer3}>
            <CardTitle name="map">Dates d'inscription</CardTitle>
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

          <Card row image={musicPlayer3}>
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

export default Accueil;
