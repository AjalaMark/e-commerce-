import React from 'react'
import styled from 'styled-components'
import { Facebook, Twitter, LinkedIn, LocationOn, Phone, Email } from '@material-ui/icons'
import { Mobile } from '../Responsive'

const Container = styled.div`
    display:flex;
    ${Mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${Mobile({display: "none"})}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h1`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Logo = styled.h1``

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MARK.</Logo>
            <Desc>I hope you have ahd a good time shoppping at Mark's, spread the word,
                 bring family and friends so you can have a stress free shopping experience 
                 that no other company offers. Happy Shopping!!.
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "0072b1">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOn style = {{marginRight:'10px'}}/>622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style = {{marginRight:'10px'}}/>+234 9023456780
            </ContactItem>
            <ContactItem>
                <Email style = {{marginRight:'10px'}}/>contact@markajala.dev
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer