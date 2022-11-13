export const EXERCISE_QUERY = `
query {
    exercises {
      data {
        attributes {
          title
          urlVideo
          tags
          slug
        }
      }
    }
  }
`;

export const GET_EXERCISE_QUERY = `
query getExercise($slug: String!) {
    exercises(filters: { slug: { eq: $slug } }) {
        data {
            attributes {
              title
              urlVideo
              tags
              slug
              instruction
              images {
                data{
                  attributes{
                    formats
                  }
                }
              }
            }
        }
    }
  }
`;
