# Submission for the Labs Open Finance Bounties

## Project Name
BlockSpy  

**LIVE DEMO:** [https://blockspy.net](https://blockspy.net)

![screenshot](https://i.imgur.com/HtPkSae.png)

## Project Summary
BlockSpy is a blockchain forensics and financial risk assessment platform that allows anyone to run a free scan on a blockchain wallet address and determine if it has been used in money laundering schemes or any other popular cryptocurrency scams. We do this by cross referencing the address’ past transactions with the daily-updated list of 2,000+ scam addresses on EtherScamDB’s GitHub.

- Free
- Open-source
- Community Operated
- Updated Daily

## API
I used the following Alethio API resources. All of them were fetched client-side via jQuery AJAX request.

1. **https://api.aleth.io/v1/accounts/{address}/transactions** - Used to fetch the specified address' past transactions so that we can see if they were involved in any suspicious activities.
2. **https://api.aleth.io/v1/accounts/{address}** - Account details. Used to fetch user nonce and Ether wallet balance.
3. **https://api.aleth.io/v1/blocks** - Used to fetch the latest mined block from the Ethereum blockchain.
4. **https://api.aleth.io/v1/accounts/{address}/tokenTransfers** - To fetch token transfers for the user specified address.

## Project Team
List each team member, along with the below fields

* **Name:** Seena Zandipour
* **Email:** craze3@gmail.com
* **Ethereum Address:** 0x5A0f2C1d8E563db79Ee40F979F6bcD0d27f86f80
* **Role:** CEO, Full-Stack Developer, Solidity Developer, Designer
* **OK to contact about future hackathons?** Yes!

## Project Advisor(s)
> "Makes a lot of sense. I wish this was standard for all block explorers"

-Xan Ditkoff
*(Growth at [BlockStack](https://blockstack.com))*

## Link to Ancillary Material
If some of your material cannot be uploaded to GitHub (ie. Google Slides, a pitch on Youtube, a metrics dashboard on BareMetrics), list it here!

- **Video:** [https://www.youtube.com/watch?v=GJfs92qa6SA](https://www.youtube.com/watch?v=GJfs92qa6SA)
- **Demo URL:** [https://blockspy.net](https://blockspy.net)

**Special Thanks:**
- Alethio

- Blockstack

- ConsenSys

## Project Launch Page
[https://blockspy.net](https://blockspy.net)
