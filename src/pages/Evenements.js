// src/pages/Evenements.js

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

import sport1 from "../images/sport1.jpg";
import sport2 from "../images/sport2.jpg";
import sport3 from "../images/sport3.jpg";
import sport4 from "../images/sport4.jpg";
import sport5 from "../images/sport5.jpg";
import sport6 from "../images/sport6.jpg";

import { Menu } from "./Menu";

const Evenements = () => {
  return (
    <Main>
      <Hero bgImage="" bgColor="dark" textColor="light" hasNavBottom>
        <HeroContent>
          <HeroTitle name="music">évenements</HeroTitle>
          <HeroText>
            Dolore nostrud dolore ex rebum dolor lorem magna est dolore sed
            volutpat suscipit consectetuer autem voluptua gubergren stet. At sit
            justo lorem eos soluta diam gubergren vel est erat. Facilisi amet
            placerat ut aliquip ipsum amet.
          </HeroText>
        </HeroContent>
        <HeroImage src={sport2} />
      </Hero>

      <Menu navProps={{ large: true }} />

      <Article>
        <Heading name="ranking-star" heading="h2" title="Rencontres sportives">
          Nonumy dolore accumsan. At minim dolore. Sed et et ipsum diam ex
          lobortis dolore dignissim doming dolore est ipsum consetetur duo.
          Aliquam takimata sadipscing est magna labore dolor amet ea molestie.
          Aliquyam est exerci dolores iusto.
        </Heading>
        <Content cols="3">
          <Card image={sport1}>
            <CardTitle name="users-line">Compétitions</CardTitle>
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
            <CardButton name="swatchbook" href="#">Lire la suite</CardButton>
          </Card>

          <Card image={sport3}>
            <CardTitle name="shoe-prints">Tennis</CardTitle>
            <CardText>
              Cum sea no te. At ea et ea consetetur justo et rebum ea et quis
              vero sadipscing tempor lorem justo magna enim. Kasd diam accumsan
              diam dolor nonumy zzril. Ipsum eos sit sit ea ad voluptua sit.
              Amet nulla ea sed ipsum duo erat lorem ipsum.
            </CardText>
            <CardButton name="swatchbook" href="#">Lire la suite</CardButton>
          </Card>

          <Card image={sport4}>
            <CardTitle name="futbol">Football</CardTitle>
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
            <CardButton name="swatchbook" href="#">Lire la suite</CardButton>
          </Card>

          <Card image={sport5}>
            <CardTitle name="person-biking">VTT</CardTitle>
            <CardText>
              Facilisis takimata diam quod amet diam sed no justo. Suscipit
              labore in clita gubergren voluptua eirmod voluptua sed tation no
              takimata clita duo et. Stet kasd amet ut laoreet kasd ut sit eos
              commodo clita clita nonumy dolor amet aliquam nisl kasd eos.
            </CardText>
            <CardButton name="swatchbook" href="#">Lire la suite</CardButton>
          </Card>

          <Card image={sport6}>
            <CardTitle name="basketball">Basketball</CardTitle>
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
            <CardButton name="swatchbook" href="#">
              Lire la suite
            </CardButton>
          </Card>
        </Content>
      </Article>
    </Main>
  );
};

export default Evenements;
