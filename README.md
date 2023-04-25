# Simple Express Server with Pokémon API

This is a simple Express server that accepts GET requests for Pokémon information using the [PokeAPI](https://pokeapi.co/). It is a back-end only application, and currently only provides information about a Pokémon's name and types. 

## Usage

To get information about a specific Pokémon, you can make a GET request using the following URL format:

http://simpleexpressserver-env.eba-xrrgzbcp.us-west-2.elasticbeanstalk.com/pokemon/POKEMON_NAME


Replace `POKEMON_NAME` with the name of the Pokémon you want to search for (case-insensitive).

### Example

To search for information about Squirtle, use the following URL:

http://simpleexpressserver-env.eba-xrrgzbcp.us-west-2.elasticbeanstalk.com/pokemon/squirtle


You should see a JSON response in your browser similar to this:

{
  "name": "squirtle",
  "types": [
    "water"
  ]
}

### Error Handling

If you enter an invalid Pokémon name or encounter an error, you will receive a JSON response with a 500 status code and an error message. For example:


#### Deployment

The application is currently deployed on AWS Elastic Beanstalk. If you want to deploy a new version or make changes to the existing deployment, refer to the AWS Elastic Beanstalk documentation for instructions.

