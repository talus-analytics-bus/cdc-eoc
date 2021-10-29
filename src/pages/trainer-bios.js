import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'

import trainerBios from '../metadata/trainerBios'

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
const Person = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin: 35px 0;
`
const Img = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-top: 8px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid #041e4288;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.h2``

const Bio = styled.div`
  line-height: 1.4;
  > p {
    margin: 10px 0;
  }
`

const TrainerBios = () => {
  return (
    <Layout>
      <Main>
        <header>
          <h1>Trainer Biographies</h1>
        </header>
        <article>
          {trainerBios.map(metadata => (
            <Person key={metadata.name}>
              <Img src={`/img/portraits/${metadata.photo}`} />
              <Text>
                <Name>{metadata.name}</Name>
                <Bio dangerouslySetInnerHTML={{ __html: metadata.bio }} />
              </Text>
            </Person>
          ))}
        </article>
      </Main>
    </Layout>
  )
}

export default TrainerBios
