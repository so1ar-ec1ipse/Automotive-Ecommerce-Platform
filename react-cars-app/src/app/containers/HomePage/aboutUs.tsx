import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw`
       w-full
       flex
       flex-wrap
       items-center
       justify-center
       pt-4
       pb-4
       pr-7
       pl-7
       md:pl-0
       md:pr-0
       bg-white
    `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          saepe ex eius veritatis rerum! Alias placeat voluptas repellat cumque
          architecto veritatis reprehenderit voluptatum inventore expedita
          aliquid, voluptate, magnam veniam id. Distinctio numquam reiciendis
          voluptatibus dicta ad modi odit adipisci, dolores unde. Placeat neque
          dolores illo deserunt ullam earum animi perferendis, error nostrum
          natus. Placeat suscipit doloremque voluptatem nemo quos similique?
          Temporibus, rem. Deleniti quo nisi at molestias quidem quod quisquam
          error architecto incidunt assumenda in corporis, praesentium labore
          voluptatibus magnam totam deserunt nostrum maiores sed nulla saepe
          enim quos cupiditate!
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
