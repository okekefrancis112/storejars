# **GraphQL Web3 and Web2 Backend**

This project demonstrates a backend implementation combining **Web3 (blockchain)** and **Web2 (traditional backend)** interactions using GraphQL. The project includes:
- Interacting with a smart contract deployed on an Ethereum testnet (e.g., Goerli).
- CRUD operations using MongoDB for traditional backend functionalities.
- A GraphQL API to query and mutate both Web3 and Web2 data.

---

## **Features**

### **Web3 Interaction**
- Deploy a simple Solidity smart contract on the Ethereum testnet (Goerli).
- Interact with the smart contract using `Ethers.js` or `Web3.js`:
  - **Query**: Fetch on-chain data such as a counter or stored value.
  - **Mutation**: Write data to the blockchain, e.g., increment a counter.

### **Web2 Interaction**
- Use MongoDB as the database to store and fetch user records.
- CRUD operations through GraphQL API:
  - **Query**: Fetch a list of users.
  - **Mutation**: Add a new user to the database.

### **GraphQL API**
- Combines both Web2 and Web3 interactions with the following operations:
  - **Query**:
    - Fetch the counter value from the blockchain.
    - Retrieve a list of users from MongoDB.
  - **Mutation**:
    - Increment the blockchain counter.
    - Add a new user to MongoDB.

---

## **Technologies Used**

### **Backend**
- [Node.js](https://nodejs.org/) - JavaScript runtime for server-side development.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server framework.
- [TypeScript](https://www.typescriptlang.org/) - Strongly-typed JavaScript.

### **Web3**
- [Solidity](https://soliditylang.org/) - Language for writing smart contracts.
- [Ethers.js](https://docs.ethers.io/) - Library for blockchain interaction.

### **Database**
- [MongoDB](https://www.mongodb.com/) - NoSQL database for traditional backend functionality.

### **Tools**
- [Hardhat](https://hardhat.org/) - Ethereum development environment for smart contracts.
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management.
- [GraphQL](https://graphql.org/) - API query language.

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone https://github.com/okekefrancis112/storejars
cd web3
```

### or

```bash
git clone https://github.com/okekefrancis112/storejars
cd web2
```

### 2. Install the dependencies
Install the necessary Node.js packages:
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add the following:
```bash
MONGO_URI=mongodb://localhost:27017/your-database
PRIVATE_KEY=your-wallet-private-key
INFURA_API_URL=https://goerli.infura.io/v3/your-infura-project-id
```

### 4.Start the Backend Server
```bash
npm run dev:user
```
