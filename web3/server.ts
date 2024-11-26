const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const { schema, root } = require("./graphql");

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
